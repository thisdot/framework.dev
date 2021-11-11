import { IndexMetadata } from "./search"

/**
 * Represents an IDE plugin, linter or other
 * tool that helps you work with code rather
 * than something used in code itself (the latter
 * would be a Library)
 */
export type Tool<T extends string> = {
	/** Name of the tool */
	name: string
	/** Author of the tool */
	author: string
	/** A short description of what it does */
	description: string
	/** A small (40x40) image to represent it */
	image: string
	/** Tags for search and filtering */
	tags: T[]
	/** A link to the tool's website or where to find it */
	href: string
}

export const toolIndexMetadata: IndexMetadata<Tool<string>, "tools"> = {
	name: "tools",
	searchableFields: ["author", "description", "name"],
	filterableFields: {},
}
