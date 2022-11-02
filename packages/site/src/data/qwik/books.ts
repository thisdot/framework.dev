import { Book } from "@framework/system/src/models/book"

export const bookTags = ["projects"] as const

export const books: Book<typeof bookTags[number]>[] = [
//   {
// 		title: "test",
// 		authors: ["test"],
// 		image: "https://theroadtoenterprise.com/images/react-book-cover-large.png",
// 		description: "Lorem ipsum dolor amit yet....",
// 		yearOfPublication: 2022,
// 		numberOfPages: 433,
// 		level: "advanced",
// 		href: "https://theroadtoenterprise.com/books/react-the-road-to-enterprise?utm_source=framework.dev&utm_medium=card&utm_campaign=react_books",
// 		tags: ["projects"],
// 	},
]