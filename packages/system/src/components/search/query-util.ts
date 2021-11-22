import Fuse from "fuse.js"
import { groupBy, map, mapValues, toPairs, uniq } from "lodash"
import {
	AllCategories,
	AllModelsByName,
	CategoryName,
} from "../../models/all-categories"
import { FilterSet, QueryParams } from "./types"

const filterRegex = /(\S+):(\S+)/g
export function parseQueryString(
	queryString: string,
	allCategories: AllCategories[]
): { params: QueryParams; availableFilters: FilterSet } {
	const filters = Array.from(queryString.matchAll(filterRegex)).map(
		([_match, key, value]) => [key, value] as const
	)
	const availableCategories = uniq(
		allCategories.map((category) => category.name)
	)

	const categories = filters
		.filter(([key]) => key === "in")
		.map(([_key, value]) => value)
	const tags = filters
		.filter(([key]) => key === "tag")
		.map(([_key, value]) => value)
	const availableFilters = {
		category: availableCategories,
		tag: uniq(allCategories.flatMap((category) => category.tags)),
		field:
			categories.length === 1
				? Object.entries(
						allCategories.find((cat) => cat.name === categories[0])
							.indexMetadata.filterableFields
				  )
				: [],
	}
	const fields = groupFieldFilters(
		filters.filter(([key]) =>
			availableFilters.field.some(([fieldName]) => key === fieldName)
		)
	)
	const textSearch = queryString.replaceAll(filterRegex, "").trim()

	return {
		params: {
			filters: {
				category: categories,
				tag: tags,
				field: fields,
			},
			textSearch,
		},
		availableFilters,
	}
}

export function serializeQueryParams(params: QueryParams): string {
	const categories = params.filters.category.map((category) => `in:${category}`)
	const tags = params.filters.tag.map((tag) => `tag:${tag}`)
	const fields = ungroupFieldFilters(params.filters.field).map(
		([fieldName, value]) => `${fieldName}:${value}`
	)

	return [...categories, ...tags, ...fields, params.textSearch].join(" ")
}

export function getWordCoordinatesAt(
	text: string,
	position: number
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
				.filter((result) => result.score < 0.4)
				.map((result) => result.item)
		: data

	return initialResults.filter(
		(record) =>
			(filters.tag.length === 0 ||
				record.tags.some((tag) => filters.tag.includes(tag))) &&
			filters.field.every(([fieldName, fieldValues]) =>
				fieldValues.some((fieldValue) => fieldValue === record[fieldName])
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
