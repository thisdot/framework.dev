import { IndexMetadata } from "./search"

/**
 * Represents a snippet or code example that
 * someone could use to solve a specific problem
 */
export type CodeExample<T extends string> = {
	/** Title of the example or snippet */
	title: string
	/** Author of the code */
	author: string
	/** A short description of what it is for */
	description: string
	/** Tags for display and filtering */
	tags: T[]
	/** A link to the example, e.g. a gist or codesandbox */
	href: string
}

export const codeExampleIndexMetadata: IndexMetadata<CodeExample<string>, "codeExamples"> = {
	name: "codeExamples",
	searchableFields: ["author", "description", "title"],
	filterableFields: {},
}
