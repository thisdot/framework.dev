export type SearchableCategory<T, Name extends string> = {
	name: Name
	indexMetadata: IndexMetadata<T, Name>
	tags: readonly string[]
	data: T[]
}

export type IndexMetadata<T, Name extends string> = {
	name: Name
	searchableFields: readonly (keyof T & string)[]
	filterableFields: FilterableFields<T>
}

export type FilterableFields<T> = {
	[K in keyof T]?: readonly T[K][]
}
