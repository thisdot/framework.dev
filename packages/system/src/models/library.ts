import { SearchableRecord } from "./search"

/**
 * Represents a Javascript library. Different
 * frameworks will use different tag sets, so
 * each framework will have to pass its tag set
 * as a type parameter here.
 */
export interface Library<T extends string> extends SearchableRecord<T> {
	/** Library name for display*/
	name: string
	/** Author name for display */
	author: string
	/** A small (40x40) image, usually a logo, to represent the library */
	image: string
	/** Option to add a dark color to the background of the image */
	darkImageBackground?: boolean
	/** Short description for display */
	description: string
	/**
	 * Repo, in full href format.
	 * For displaying star count and or linking
	 * back to the repo.
	 */
	repo: string
	/**
	 * Package name, for displaying download
	 * count, bundle size, and SO question count
	 * as well as for linking back to NPM.
	 */
	package: string
	/**
	 * Link to the library's page so that users can
	 * go and learn more. This can be a link to the
	 * library's docs site if it has one. If it does
	 * not then a link to its npm page will suffice
	 */
	href: string
	/**
	 * Language associate with the library
	 */
	language: string
}

export const libraryIndexMetadata = {
	name: "libraries",
	searchableFields: ["author", "description", "name"],
	filterableFields: {},
} as const
