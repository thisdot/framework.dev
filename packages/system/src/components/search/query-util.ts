import Fuse from "fuse.js"
import {
	AllCategories,
	AllModelsByName,
	CategoryName,
} from "../../models/all-categories"
import { QueryParams } from "./types"

const filterRegex = /(\S+):(\S+)/g
export function parseQueryString(
	queryString: string,
	allCategories: AllCategories[]
): QueryParams {
	const filters = Array.from(queryString.matchAll(filterRegex)).map(
		([_match, key, value]) => [key, value]
	)
	const availableCategories = new Set(
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
		tag: new Set(allCategories.flatMap((category) => category.tags)),
		fields: allCategories
			.filter(
				(category) =>
					categories.length === 0 || categories.includes(category.name)
			)
			.flatMap((category) =>
				Object.entries(category.indexMetadata.filterableFields)
			)
			.reduce((map, [key, values]) => {
				if (!map.has(key)) map.set(key, new Set())
				for (const value of values) {
					map.get(key).add(value)
				}
				return map
			}, new Map<string, Set<string>>()),
	}
	const fields = filters
		.filter(([key]) => availableFilters.fields.has(key))
		.map(([key, value]) => [key, value] as const)
	const textSearch = queryString.replaceAll(filterRegex, "").trim()

	return {
		categories,
		tags,
		fields,
		textSearch,
		availableFilters,
	}
}

export function serializeQueryParams(params: QueryParams): string {
	const categories = params.categories.map((category) => `in:${category}`)
	const tags = params.tags.map((tag) => `tag:${tag}`)
	const fields = params.fields.map(
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
	params: { textSearch, tags, fields },
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
			(tags.length === 0 || record.tags.some((tag) => tags.includes(tag))) &&
			fields.every(([fieldName]) =>
				fields
					.filter(([name]) => name === fieldName)
					.some(([_name, fieldValue]) => fieldValue === record[fieldName])
			)
	)
}
