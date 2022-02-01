import classNames from "classnames"
import React from "react"
import { Book } from "../models/book"
import {
	bookListStyle,
	bookImage,
	bookTitle,
	bookMetadata,
} from "./book-list.css"
import { BulletDivider } from "./bullet-divider"

export type BookListProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	books: Book<string>[]
}

export function BookList({
	className,
	books,
	headingTag: H,
	...props
}: BookListProps) {
	return (
		<section className={classNames(className, bookListStyle)} {...props}>
			{books.map((book) => {
				return (
					<article key={`book-list-${book.title}`}>
						<header>
							<img className={bookImage} src={book.image} alt="" />
							<a href={book.href} target="_blank" rel="noopener noreferrer">
								<H className={bookTitle}>{book.title}</H>
							</a>
							<p className={bookMetadata}>
								{book.authors.join(", ")}
								<BulletDivider />
								{book.yearOfPublication}
							</p>
						</header>
					</article>
				)
			})}
		</section>
	)
}
