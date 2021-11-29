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
	/** Short description for display */
	description: string
	/**
	 * GitHub repo, in :author/:repoName format.
	 * For displaying star count and linking
	 * back to the repo.
	 */
	gitHubRepo: string
	/**
	 * NPM package name, for displaying download
	 * count, bundle size, and SO question count
	 * as well as for linking back to NPM.
	 */
	npmPackage: string
	/**
	 * Link to the library's page so that users can
	 * go and learn more. This can be a link to the
	 * library's docs site if it has one. If it does
	 * not then a link to its npm page will suffice
	 */
	href: string
}

export const libraryIndexMetadata = {
	name: "libraries",
	searchableFields: ["author", "description", "name"],
	filterableFields: {},
} as const
