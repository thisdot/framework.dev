import { IndexMetadata, SearchableRecord } from "./search"

/**
 * Represents a snippet or code example that
 * someone could use to solve a specific problem
 */
export interface CodeExample<T extends string> extends SearchableRecord<T> {
	/** Title of the example or snippet */
	title: string
	/** Author of the code */
	author: string
	/** A short description of what it is for */
	description: string
	/** A link to the example, e.g. a gist or codesandbox */
	href: string
}

export const codeExampleIndexMetadata: IndexMetadata<
	CodeExample<string>,
	"codeExamples"
> = {
	name: "codeExamples",
	searchableFields: ["author", "description", "title"],
	filterableFields: {},
}
