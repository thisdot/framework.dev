import { SearchableRecord } from "./search"

/**
 * Represents a blog or community that
 * hosts content related to the framework
 */
export interface Community<T extends string> extends SearchableRecord<T> {
	/** The name of the community or site */
	name: string
	/** A short description of what they do */
	description: string
	/** A small (40x40) image that represents them */
	image: string
	/** The type of community, e.g. "Discord Community", "Slack Community", etc. */
	type: string
	/** A link to the community's website */
	href: string
 	/** Option to add a dark color to the background of the image */
	darkImageBackground?: boolean
}

export const communityIndexMetadata = {
	name: "communities",
	searchableFields: ["description", "name"],
	filterableFields: {},
} as const
