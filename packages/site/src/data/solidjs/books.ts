import { Book } from '@framework/system/src/models/book'

export const bookTags = [] as const

export const books: Book<(typeof bookTags)[number]>[] = []
