import Fuse from "fuse.js"
import { groupBy, map, mapValues, toPairs, uniq, without } from "lodash"
import {
	AllCategories,
	AllModels,
	AllModelsByName,
	CategoryName,
} from "../../models/all-categories"
import { hasFieldEqualToValue } from "../../util/data-utils"
import {
	deserializeFieldName,
	deserializeFieldValues,
	serializeFieldName,
	serializeFieldValue,
} from "../../util/string-utils"
import { FilterSet, QueryParams } from "./types"

const filterRegex = /(\S+):(\S+)/g
export function parseQueryString(
	queryString: string,
	availableFilters: FilterSet
): QueryParams {
	const filters = Array.from(queryString.matchAll(filterRegex)).map(
		([_match, key, value]) => [key, value] as const
	)

	const categories = filters
		.filter(([key]) => key === "in")
		.map(([_key, value]) => deserializeFieldName(value))
	const tags = deserializeFieldValues(
		filters.filter(([key]) => key === "tag").map(([_key, value]) => value),
		availableFilters.tag
	)
	const fields = groupFieldFilters(
		filters.filter(([key]) =>
			availableFilters.field.some(([fieldName]) => key === fieldName)
		)
	).map(
		([fieldName, filterValues]) =>
			[
				deserializeFieldName(fieldName),
				deserializeFieldValues(
					filterValues,
					findAvailableFiltersForField(
						availableFilters,
						deserializeFieldName(fieldName)
					)
				),
			] as const
	)
	const textSearch = queryString.replace(filterRegex, "").trim()

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
	fieldName: string
) {
	return (
		availableFilters.field.find(
			([availableFilterName]) => availableFilterName === fieldName
		)?.[1] ?? []
	)
}

export function calculateAvailableFilters(
	allCategories: AllCategories[],
	preFilters: FilterSet
): FilterSet {
	const availableCategories = uniq(
		allCategories.map((category) => category.name)
	)
	return {
		category: preFilters.category.length > 0 ? [] : availableCategories,
		tag: without(
			uniq(allCategories.flatMap((category) => category.tags)),
			...preFilters.tag
		),
		field:
			allCategories.length === 1
				? Object.entries(allCategories[0].indexMetadata.filterableFields)
				: [],
	}
}

export function serializeQueryParams(params: QueryParams): string {
	const categories = params.filters.category.map(
		(category) => `in:${serializeFieldName(category)}`
	)
	const tags = params.filters.tag.map(
		(tag) => `tag:${serializeFieldValue(tag)}`
	)
	const fields = ungroupFieldFilters(params.filters.field).map(
		([fieldName, value]) =>
			`${serializeFieldName(fieldName)}:${serializeFieldValue(value)}`
	)

	return [...categories, ...tags, ...fields, params.textSearch].join(" ")
}

export function getWordCoordinatesAt(
	text: string,
	position = 0
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
	T extends AllModelsByName[K] = AllModelsByName[K]
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
				(filterCategory) => filterCategory === category.name
			)
	)
}

export function filterRecords<T extends AllModels>(
	data: T[],
	filters: FilterSet
): T[] {
	return data.filter(
		(record) =>
			(filters.tag.length === 0 ||
				record.tags.some((tag) => filters.tag.includes(tag))) &&
			filters.field.every(([fieldName, fieldValues]) =>
				fieldValues.some((fieldValue) =>
					hasFieldEqualToValue(record, fieldName, fieldValue)
				)
			)
	)
}

export function groupFieldFilters(
	filters: (readonly [string, string])[]
): (readonly [string, string[]])[] {
	return toPairs(mapValues(groupBy(filters, 0), (values) => map(values, 1)))
}

export function ungroupFieldFilters(
	groupedFilters: (readonly [string, readonly string[]])[]
): (readonly [string, string])[] {
	return groupedFilters.flatMap(([k, vs]) => vs.map((v) => [k, v]))
}

export const emptyFilterSet: FilterSet = {
	category: [],
	field: [],
	tag: [],
}
