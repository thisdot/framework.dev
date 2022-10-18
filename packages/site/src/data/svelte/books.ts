import {Book} from "@framework/system/src/models/book"

export const bookTags = [] as const

export const books: Book<typeof bookTags[number]>[] = [
    {
        title: "",
        authors: [""],
        image: "",
        description: '',
        yearOfPublication: 2022,
        numberOfPages: 1,
        level: 'beginner',
        href: '',
        tags: []
    },
]
