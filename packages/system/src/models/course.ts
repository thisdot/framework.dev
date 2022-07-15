import { SearchableRecord } from './search'

export const courseLevels = ['beginner', 'intermediate', 'advanced'] as const
export const coursePaymentTypes = ['free', 'paid'] as const
export const courseFormats = ['text', 'interactive', 'video'] as const

/**
 * Represents an online course, e.g.
 * tutorials, video courses, etc.
 */
export interface Course<T extends string> extends SearchableRecord<T> {
	/** The title of the course, for display */
	title: string
	/** The author of the course, for display */
	author: string
	/** A small (40x40) image, usually a logo, to represent the course */
	image: string
	/** A short description of the course, for display */
	description: string
	/** What the target audience of the course is, in terms of experience */
	level: typeof courseLevels[number]
	/** How the student pays for the course. We currently only make paid/free distinctions */
	paymentType: typeof coursePaymentTypes[number]
	/** What format a course takes. So that users can search for courses based on their learning style */
	format: typeof courseFormats[number]
	/** Hyperlink to the course, so students can find it */
	href: string
}

export const courseIndexMetadata = {
	name: 'courses',
	searchableFields: ['author', 'description', 'title'],
	filterableFields: {
		level: courseLevels,
		paymentType: coursePaymentTypes,
		format: courseFormats,
	},
} as const
