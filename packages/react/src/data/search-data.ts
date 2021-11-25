import { AllCategories } from "@framework/system/src/models/all-categories"
import { bookIndexMetadata } from "@framework/system/src/models/book"
import { codeExampleIndexMetadata } from "@framework/system/src/models/code-example"
import { communityIndexMetadata } from "@framework/system/src/models/community"
import { companyIndexMetadata } from "@framework/system/src/models/company"
import { courseIndexMetadata } from "@framework/system/src/models/course"
import { libraryIndexMetadata } from "@framework/system/src/models/library"
import { podcastIndexMetadata } from "@framework/system/src/models/podcast"
import { toolIndexMetadata } from "@framework/system/src/models/tool"
import { books, bookTags } from "./books"
import { codeExamples, codeExampleTags } from "./code-examples"
import { communities, communityTags } from "./communities"
import { companies, companyTags } from "./companies"
import { courses, courseTags } from "./courses"
import { libraries, libraryTags } from "./libraries"
import { podcasts, podcastTags } from "./podcasts"
import { tools, toolTags } from "./tools"

export const searchData: AllCategories[] = [
	{
		data: libraries,
		indexMetadata: libraryIndexMetadata,
		name: libraryIndexMetadata.name,
		tags: libraryTags,
		subCategories: [
			"state management",
			"data fetching",
			"styling",
			"component library",
			"forms",
			"framework",
			"internationalization",
		] as typeof libraryTags[number][],
	},
	{
		data: tools,
		indexMetadata: toolIndexMetadata,
		name: toolIndexMetadata.name,
		tags: toolTags,
	},
	{
		data: codeExamples,
		indexMetadata: codeExampleIndexMetadata,
		name: codeExampleIndexMetadata.name,
		tags: codeExampleTags,
	},
	{
		data: courses,
		indexMetadata: courseIndexMetadata,
		name: courseIndexMetadata.name,
		tags: courseTags,
	},
	{
		data: communities,
		indexMetadata: communityIndexMetadata,
		name: communityIndexMetadata.name,
		tags: communityTags,
	},
	{
		data: podcasts,
		indexMetadata: podcastIndexMetadata,
		name: podcastIndexMetadata.name,
		tags: podcastTags,
	},
	{
		data: books,
		indexMetadata: bookIndexMetadata,
		name: bookIndexMetadata.name,
		tags: bookTags,
	},
	{
		data: companies,
		indexMetadata: companyIndexMetadata,
		name: companyIndexMetadata.name,
		tags: companyTags,
	},
]
