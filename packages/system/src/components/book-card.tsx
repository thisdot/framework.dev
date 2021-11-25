import classNames from "classnames"
import {
	bookCardStyle,
	bookImage,
	bookTitle,
	bookMetadata,
	bookBlurb,
} from "./book-card.css"
import { Book } from "../models/book"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { BulletDivider } from "./bullet-divider"
import { serializeFieldValue } from "../util/string-utils"

export type BookCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	book: Book<string>
}

export function BookCard({
	className,
	book,
	headingTag: H = "h1",
	...props
}: BookCardProps) {
	return (
		<article className={classNames(className, bookCardStyle)} {...props}>
			<header>
				<img className={bookImage} src={book.image} />
				<p className={sprinkles({ textStyle: "tinyCaps", color: book.level })}>
					<a href={`/categories/books/levels/${serializeFieldValue(book.level)}`}>
						{book.level}
					</a>
				</p>
				<a href={book.href} target="_blank" rel="noopener noreferrer">
					<H className={bookTitle}>{book.title}</H>
				</a>
				<p className={bookMetadata}>
					{book.authors.join(", ")}
					<BulletDivider />
					{book.yearOfPublication}
					<BulletDivider />
					{book.numberOfPages} pages
				</p>
			</header>
			<p className={bookBlurb}>{book.description}</p>
		</article>
	)
}
