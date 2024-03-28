import Fuse from 'fuse.js'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'
import toPairs from 'lodash/toPairs'
import uniq from 'lodash/uniq'
import without from 'lodash/without'
import {
	type AllCategories,
	type AllModels,
	type AllModelsByName,
	type AttributeDefinition,
	type CategoryName,
	type FieldFilter,
} from '../../models/all-categories'
import { hasFieldEqualToValue } from '../../util/data-utils'
import {
	deserializeFieldName,
	deserializeFieldValue,
	deserializeFieldValues,
	serializeFieldName,
	serializeFieldValue,
} from '../../util/string-utils'
import { type FilterSet, type QueryParams } from './types'

const filterRegex = /(\S+):(\S+)/g
export function parseQueryString(
	queryString: string,
	availableFilters: FilterSet,
): QueryParams {
	const filters = Array.from(queryString.matchAll(filterRegex)).map(
		([_match, key, value]) => [key, value] as const,
	)

	const isValidCategoryFilter = (
		filterCandidate: readonly [string, string],
	): filterCandidate is readonly ['in', CategoryName] =>
		filterCandidate[0] === 'in' &&
		availableFilters.category.some(
			(possibleValue) => possibleValue === filterCandidate[1],
		)

	const categories = filters
		.map(([key, value]) => [key, deserializeFieldName(value)] as const)
		.filter(isValidCategoryFilter)
		.map(([_, value]) => value)

	const tags = deserializeFieldValues(
		filters.filter(([key]) => key === 'tag').map(([_key, value]) => value),
		availableFilters.tag,
	)

	const isValidFieldFilter = (
		filterCandidate: readonly [string, string | undefined],
	): filterCandidate is AttributeDefinition =>
		!!availableFilters.field
			.find(([fieldName]) => filterCandidate[0] === fieldName)?.[1]
			.some((fieldValue) => filterCandidate[1] === fieldValue)

	const deserializeFieldFilter = ([fieldName, filterValue]: readonly [
		string,
		string,
	]): readonly [string, string | undefined] =>
		[
			deserializeFieldName(fieldName),
			deserializeFieldValue(
				filterValue,
				findAvailableFiltersForField(
					availableFilters,
					deserializeFieldName(fieldName),
				),
			),
		] as const

	const fields = groupFieldFilters(
		filters.map(deserializeFieldFilter).filter(isValidFieldFilter),
	)
	const textSearch = queryString.replace(filterRegex, '').trim()

	return {
		filters: {
			category: categories,
			tag: tags,
			field: fields,
		},
		textSearch,
	}
}

function findAvailableFiltersForField(
	availableFilters: FilterSet,
	fieldName: string,
) {
	return (
		availableFilters.field.find(
			([availableFilterName]) => availableFilterName === fieldName,
		)?.[1] ?? []
	)
}

export function calculateAvailableFilters(
	allCategories: AllCategories[],
	preFilters: FilterSet,
): FilterSet {
	const availableCategories = uniq(
		allCategories.map((category) => category.name),
	)
	return {
		category: preFilters.category.length > 0 ? [] : availableCategories,
		tag: without(
			uniq(allCategories.flatMap((category) => category.tags)),
			...preFilters.tag,
		),
		field:
			allCategories.length === 1
				? Object.entries(allCategories[0].indexMetadata.filterableFields).map(
						([key, values]) => [key, [...values]] as FieldFilter,
					)
				: [],
	}
}

export function serializeQueryParams(params: QueryParams): string {
	const categories = params.filters.category.map(
		(category) => `in:${serializeFieldName(category)}`,
	)
	const tags = params.filters.tag.map(
		(tag) => `tag:${serializeFieldValue(tag)}`,
	)
	const fields = ungroupFieldFilters(params.filters.field).map(
		([fieldName, value]) =>
			`${serializeFieldName(fieldName)}:${serializeFieldValue(value)}`,
	)

	return [...categories, ...tags, ...fields, params.textSearch].join(' ')
}

export function getWordCoordinatesAt(
	text: string,
	position = 0,
): [number, number] | null {
	if (!position) return null
	// Search for the word's beginning and end.
	const left = text.slice(0, position).search(/\S+$/),
		right = text.slice(position).search(/\s/)

	return [
		left < 0 ? position : left,
		right < 0 ? text.length : right + position,
	]
}

type SearchArgs<
	K extends CategoryName,
	T extends AllModelsByName[K] = AllModelsByName[K],
> = {
	category: K
	data: T[]
	params: QueryParams
	searchIndex: Fuse<T>
}

export function getSearchResults<K extends CategoryName>({
	data,
	params: { textSearch, filters },
	searchIndex,
}: SearchArgs<K>): AllModelsByName[K][] {
	const initialResults: AllModelsByName[K][] = textSearch
		? searchIndex
				.search(textSearch)
				.filter((result) => result.score && result.score < 0.4)
				.map((result) => result.item)
		: data

	return filterRecords(initialResults, filters)
}

export function filterCategories(data: AllCategories[], filters: FilterSet) {
	return data.filter(
		(category) =>
			filters.category.length === 0 ||
			filters.category.some(
				(filterCategory) => filterCategory === category.name,
			),
	)
}

export function filterRecords<T extends AllModels>(
	data: T[],
	filters: FilterSet,
): T[] {
	return data.filter(
		(record) =>
			(filters.tag.length === 0 ||
				record.tags.some((tag) => filters.tag.includes(tag))) &&
			filters.field.every(([fieldName, fieldValues]) =>
				fieldValues.some((fieldValue) =>
					hasFieldEqualToValue(record, fieldName, fieldValue),
				),
			),
	)
}

export function applyPreFilters(
	initialData: AllCategories[],
	preFilters: FilterSet,
): AllCategories[] {
	return filterCategories(initialData, preFilters).map<AllCategories>(
		<T extends AllCategories>(category: T) =>
			({
				...category,
				data: filterRecords(category.data as any, preFilters),
			}) as T,
	)
}

export function groupFieldFilters(
	filters: AttributeDefinition[],
): FieldFilter[] {
	return toPairs(
		mapValues(groupBy(filters, 0), (values) => map(values, 1)),
	) as FieldFilter[]
}

export function ungroupFieldFilters(
	groupedFilters: FieldFilter[],
): AttributeDefinition[] {
	return groupedFilters.flatMap(([k, vs]) =>
		// This is a dirty cast but the code to make TypeScript understand
		// what is happening here would be even worse
		vs.map((v) => [k, v] as AttributeDefinition),
	)
}

type UngroupedFieldFilter<T extends FieldFilter> = T extends unknown
	? (readonly [T[0], T[1][number]])[]
	: never

export function ungroupFieldFilter<T extends FieldFilter>([
	fieldName,
	fieldValues,
]: T): UngroupedFieldFilter<T> {
	return fieldValues.map(
		(v) => [fieldName, v] as const,
	) as UngroupedFieldFilter<T>
}

export const emptyFilterSet: FilterSet = {
	category: [],
	field: [],
	tag: [],
}

export function isEmptyFilterSet(filters: FilterSet): boolean {
	return (
		filters.category.length === 0 &&
		filters.field.length === 0 &&
		filters.tag.length === 0
	)
}
