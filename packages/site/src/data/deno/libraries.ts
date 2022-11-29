import { Library } from "@framework/system/src/models/library"

export const libraryTags = [] as const

// The default image here for use
// on libraries that don't have an image
// const defaultImage =
// 	"https://camo.githubusercontent.com/7a37608c39244ad994b53f25944b2718658e6d6558c8309bee7696530cf82bdc/68747470733a2f2f64656e6f2e6c616e642f6c6f676f2e737667"

// TODO: Update the language fields to contain the correct language for package lookup

export const libraries: Library<typeof libraryTags[number]>[] = []
