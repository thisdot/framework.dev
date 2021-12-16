import { AllCategories } from "@framework/system/src/models/all-categories"
import { blogIndexMetadata } from "@framework/system/src/models/blog"
import { bookIndexMetadata } from "@framework/system/src/models/book"
import { communityIndexMetadata } from "@framework/system/src/models/community"
import { courseIndexMetadata } from "@framework/system/src/models/course"
import { libraryIndexMetadata } from "@framework/system/src/models/library"
import { podcastIndexMetadata } from "@framework/system/src/models/podcast"
import { toolIndexMetadata } from "@framework/system/src/models/tool"
import { blogs, blogTags } from "./blogs"
import { books, bookTags } from "./books"
import { communities, communityTags } from "./communities"
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
		data: blogs,
		indexMetadata: blogIndexMetadata,
		name: blogIndexMetadata.name,
		tags: blogTags,
	},
]
