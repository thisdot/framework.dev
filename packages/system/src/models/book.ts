import { SearchableRecord } from "./search"

export const bookLevels = ["beginner", "intermediate", "advanced"] as const

/**
 * Represents a book that might be of interest to
 * someone learning a given framework.
 */
export interface Book<T extends string> extends SearchableRecord<T> {
	/** Book title, for display */
	title: string
	/** Book's author, for display */
	authors: string[]
	/** Cover image of the book, in 2:3 (100x150) format */
	image: string
	/** Short description of the book, for display */
	description: string
	/** Year of first publication */
	yearOfPublication: number
	/** Length of the book, in number of pages */
	numberOfPages: number
	/** Target audience by experience level */
	level: "beginner" | "intermediate" | "advanced"
	/**
	 * Link to a website for the book. This should be
	 * as close as possible to a link to the author
	 * or publisher's site for the book. Avoid links to
	 * large resellers like Amazon if possible.
	 */
	href: string
}

export const bookIndexMetadata = {
	name: "books",
	searchableFields: ["authors", "description", "title"],
	filterableFields: { level: ["beginner", "intermediate", "advanced"] },
} as const
