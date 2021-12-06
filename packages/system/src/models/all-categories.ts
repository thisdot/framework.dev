import {
	ArrayElement,
	RecordElement,
	UnionToIntersection,
} from "../util/type-utils"
import { Book, bookIndexMetadata } from "./book"
import { CodeExample, codeExampleIndexMetadata } from "./code-example"
import { Community, communityIndexMetadata } from "./community"
import { Company, companyIndexMetadata } from "./company"
import { Course, courseIndexMetadata } from "./course"
import { Library, libraryIndexMetadata } from "./library"
import { Podcast, podcastIndexMetadata } from "./podcast"
import { Tool, toolIndexMetadata } from "./tool"

export const allCategoriesMetadata = {
	[bookIndexMetadata.name]: bookIndexMetadata,
	[codeExampleIndexMetadata.name]: codeExampleIndexMetadata,
	[communityIndexMetadata.name]: communityIndexMetadata,
	[companyIndexMetadata.name]: companyIndexMetadata,
	[courseIndexMetadata.name]: courseIndexMetadata,
	[libraryIndexMetadata.name]: libraryIndexMetadata,
	[podcastIndexMetadata.name]: podcastIndexMetadata,
	[toolIndexMetadata.name]: toolIndexMetadata,
} as const

export type CategoryMetadata<T extends keyof typeof allCategoriesMetadata> =
	typeof allCategoriesMetadata[T]

export type CategoryName = keyof typeof allCategoriesMetadata

export const allCategoryNames = Object.keys(
	allCategoriesMetadata
) as CategoryName[]

export type AllModelsByName = {
	[bookIndexMetadata.name]: Book<string>
	[codeExampleIndexMetadata.name]: CodeExample<string>
	[communityIndexMetadata.name]: Community<string>
	[companyIndexMetadata.name]: Company<string>
	[courseIndexMetadata.name]: Course<string>
	[libraryIndexMetadata.name]: Library<string>
	[podcastIndexMetadata.name]: Podcast<string>
	[toolIndexMetadata.name]: Tool<string>
}

export type Model<K extends keyof AllModelsByName> = AllModelsByName[K]

export type AllModels = AllModelsByName[keyof AllModelsByName]

export type AllCategoriesByName = {
	[K in keyof AllModelsByName]: {
		name: K
		indexMetadata: CategoryMetadata<K>
		tags: readonly string[]
		subCategories?: readonly string[]
		data: Model<K>[]
	}
}

export type AllCategories = AllCategoriesByName[keyof AllCategoriesByName]

/**
 * Some components accept a prop in the form `[fieldName, fieldValue]`
 * for fields and values that are discrete/filterable. This type code
 * extracts the valid name/value combinations from the static
 * category metadata.
 */
type AllFilterableFields<M = CategoryMetadata<CategoryName>> =
	M extends CategoryMetadata<CategoryName>
		? {
				[FieldName in keyof M["filterableFields"]]: [
					FieldName,
					ArrayElement<M["filterableFields"][FieldName]>
				]
		  }
		: never

export type AttributeDefinition = Readonly<
	RecordElement<UnionToIntersection<AllFilterableFields>>
>

type AllFieldFilters<M = CategoryMetadata<CategoryName>> =
	M extends CategoryMetadata<CategoryName>
		? {
				[FieldName in keyof M["filterableFields"]]: [
					FieldName,
					Readonly<ArrayElement<M["filterableFields"][FieldName]>[]>
				]
		  }
		: never

export type FieldFilter = Readonly<
	RecordElement<UnionToIntersection<AllFieldFilters>>
>
