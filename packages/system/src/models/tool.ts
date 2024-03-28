import { type SearchableRecord } from './search';

/**
 * Represents an IDE plugin, linter or other
 * tool that helps you work with code rather
 * than something used in code itself (the latter
 * would be a Library)
 */
export interface Tool<T extends string> extends SearchableRecord<T> {
	/** Name of the tool */
	name: string;
	/** Author of the tool */
	author: string;
	/** A short description of what it does */
	description: string;
	/** A small (40x40) image to represent it */
	image: string;
	/** A link to the tool's website or where to find it */
	href: string;
}

export const toolIndexMetadata = {
	name: 'tools',
	searchableFields: ['author', 'description', 'name'],
	filterableFields: {},
} as const;
