import { Book } from "@framework/system/src/models/book"

export const bookTags = [
	"nx",
	"recipes",
	"monorepo",
	"state management",
	"NgRx",
	"testing",
	"PWA",
	"routing",
	"components",
	"data binding",
] as const

export const books: Book<typeof bookTags[number]>[] = []
