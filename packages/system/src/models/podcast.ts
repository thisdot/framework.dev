/**
 * Represents a podcast that talks about the
 * framework or related material
 */
export type Podcast<T extends string> = {
	/** Title of the podcast */
	title: string
	/** A small (40x40) image that represents the podcast */
	image: string
	/** A short description of the usual content of the podcast */
	description: string
	/** A link to the podcast's RSS feed (will be used to fetch stats) */
	rss: string
	/** Names of the regular hosts of the podcast */
	hosts: string[]
	/** Tags for search and filtering */
	tags: T[]
	/** A link to the podcast's website or a place to listen to it */
	href: string
}
