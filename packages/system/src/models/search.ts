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
	[K in keyof T]?: T[K] extends string ? readonly T[K][] : never
}

export interface SearchableRecord<T extends string> {
	tags: T[]
}