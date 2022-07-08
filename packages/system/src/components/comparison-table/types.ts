export type Headings =
	| 'name'
	| 'author'
	| 'coverage'
	| 'downloads'
	| 'health'
	| 'stars'

export interface ISortConfig {
	by: Headings
	asc: boolean
}

export interface ILibrary {
	name: string
	author: string
	image: string
	href: string
	coverage: number
	downloads: number
	health: number
	stars: number
}
