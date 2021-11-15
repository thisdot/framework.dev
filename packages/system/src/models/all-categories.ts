import { bookIndexMetadata } from "./book"
import { codeExampleIndexMetadata } from "./code-example"
import { communityIndexMetadata } from "./community"
import { companyIndexMetadata } from "./company"
import { courseIndexMetadata } from "./course"
import { libraryIndexMetadata } from "./library"
import { podcastIndexMetadata } from "./podcast"
import { IndexMetadata, SearchableCategory } from "./search"
import { toolIndexMetadata } from "./tool"

type ExtractType<MetadataType> = MetadataType extends IndexMetadata<
	infer X,
	any
>
	? X
	: never

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

export const allCategoryNames = Object.keys(
	allCategoriesMetadata
) as (keyof typeof allCategoriesMetadata)[]

export type AllModelsByName = {
	[K in keyof typeof allCategoriesMetadata]: ExtractType<
		typeof allCategoriesMetadata[K]
	>
}

export type AllModels = AllModelsByName[keyof AllModelsByName]

export type AllCategoriesByName = {
	[K in keyof AllModelsByName]: SearchableCategory<AllModelsByName[K], K>
}

export type AllCategories = AllCategoriesByName[keyof AllCategoriesByName]
