export type FilterSet = {
	category: string[]
	tag: string[]
	field: (readonly [string, readonly string[]])[]
}

export type QueryParams = {
	filters: FilterSet
	textSearch: string
}
