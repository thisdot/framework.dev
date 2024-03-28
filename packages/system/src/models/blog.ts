import { type SearchableRecord } from './search'

/**
 * Represents a blog or article
 * that covers a specific topic
 * or topics.
 */
export interface Blog<T extends string> extends SearchableRecord<T> {
	/** Title of the blog or article */
	title: string
	/** Author of the blog */
	author: string
	/** A short description of the blog or article */
	description: string
	/** A small (40x40) image to represent it */
	image: string
	/** A link to the blog or article */
	href: string
}

export const blogIndexMetadata = {
	name: 'blogs',
	searchableFields: ['author', 'description', 'name'],
	filterableFields: {},
} as const
