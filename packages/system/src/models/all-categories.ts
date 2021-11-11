import { Book } from "./book"
import { CodeExample } from "./code-example"
import { Community } from "./community"
import { Company } from "./company"
import { Course } from "./course"
import { Library } from "./library"
import { Podcast } from "./podcast"
import { SearchableCategory } from "./search"
import { Tool } from "./tool"

export type AllModelsByName<T extends string> = {
	books: Book<T>
	codeExamples: CodeExample<T>
	communities: Community<T>
	companies: Company
	courses: Course<T>
	libraries: Library<T>
	podcasts: Podcast<T>
	tools: Tool<T>
}

export type AllModels<T extends string> =
	AllModelsByName<T>[keyof AllModelsByName<T>]

export type AllCategoriesByName<T extends string> = {
	[K in keyof AllModelsByName<T>]: SearchableCategory<AllModelsByName<T>[K], K>
}

export type AllCategories<T extends string> =
	AllCategoriesByName<T>[keyof AllCategoriesByName<T>]
