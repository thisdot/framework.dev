import { Book } from "@framework/system/src/models/book"

export const bookTags = [
    'projects',
    'vuex',
    'routing',
    'testing',
	"Vue.js 2",
    "Vue.js 3",
] as const

export const books: Book<typeof bookTags[number]>[] = [
    {
		title: "Vue.js: Up and Running",
		authors: ["Callum Macrae"],
		image: "https://learning.oreilly.com/library/cover/9781491997239/250w/",
		description: "Get a brisk introduction to building fast, interactive single-page web applications with Vue.js, the popular JavaScript framework that organizes and simplifies web development. With this practical guide, you'll quickly move from basics to custom components and advanced features—including JSX, the JavaScript syntax extension.",
		yearOfPublication: 2018,
		numberOfPages: 174,
		level: 'beginner',
		href: 'https://www.oreilly.com/library/view/vuejs-up-and/9781491997239/',
		tags: ['projects', 'vuex', 'routing', 'testing', "Vue.js 2"]
	},
]
