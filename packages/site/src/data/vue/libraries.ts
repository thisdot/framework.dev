import { Library } from "@framework/system/src/models/library"

export const libraryTags = [] as const

export const libraries: Library<typeof libraryTags[number]>[] = []
