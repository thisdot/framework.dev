import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"framework",
	"documentation",
	"logging",
	"performance tools",
	"data fetching",
	"testing",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "",
		author: "",
		gitHubRepo: "",
		npmPackage: "",
		href: "",
		description: "",
		image: "",
		tags: [],
	},
]
