import { type SearchableRecord } from './search'

/**
 * Represents a podcast that talks about the
 * framework or related material
 */
export interface Podcast<T extends string> extends SearchableRecord<T> {
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
	/** A link to the podcast's website or a place to listen to it */
	href: string
}

export const podcastIndexMetadata = {
	name: 'podcasts',
	searchableFields: ['hosts', 'description', 'title'],
	filterableFields: {},
} as const
