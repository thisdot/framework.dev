import classNames from "classnames"
import React from "react"
import { sampleSize } from "lodash"
import { Book } from "../../models/book"
import { booksStyle } from "./books.css"
import { FeatureAndList } from "./feature-and-list"

export interface BooksProps extends React.ComponentPropsWithoutRef<"div"> {
	books: Book<string>[]
}

export function Books({ className, books, ...props }: BooksProps) {
	const randomBooks = sampleSize(books, 6)
	return (
		<FeatureAndList
			className={classNames(className, booksStyle)}
			title="Top-tier books to read"
			viewAll={{ title: "View all books", href: "/categories/books" }}
			items={randomBooks.map((book) => {
				return {
					image: { src: book.image, style: "book" },
					title: book.title,
					metadata: book.authors.join(", "),
					href: book.href,
					description: book.description,
					attributes: [["level", book.level]],
				}
			})}
			{...props}
		/>
	)
}
