import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"state management",
	"internationalization",
	"framework",
	"documentation",
	"styling",
	"component",
	"logging",
	"RxJS",
	"performance tools",
	"redux",
	"firebase",
	"data fetching",
	"GraphQL",
	"Utility-First CSS",
	"CSS in JS",
	"component library",
	"bootstrap",
	"forms",
	"reactive forms",
	"testing",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = []
