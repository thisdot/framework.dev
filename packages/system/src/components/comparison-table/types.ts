export type Headings =
	| "name"
	| "author"
	| "coverage"
	| "downloads"
	| "health"
	| "stars"

export interface ISortConfig {
	by: Headings
	asc: boolean
}
