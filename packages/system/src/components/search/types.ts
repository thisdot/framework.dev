import { CategoryName } from "../../models/all-categories"

export type Filters = {
	category: Set<CategoryName>
	tag: Set<string>
	fields: Map<string, Set<string>>
}

export type QueryParams = {
	categories: string[]
	tags: string[]
	fields: (readonly [string, string])[]
	textSearch: string
	availableFilters: Filters
}
