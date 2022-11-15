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

// The default image here for use
// on libraries that don't have an image
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultImage = ""

export const libraries: Library<typeof libraryTags[number]>[] = []
