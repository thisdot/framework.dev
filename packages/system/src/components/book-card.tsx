import classNames from "classnames"
import {
	bookCardStyle,
	bookImage,
	bookTitle,
	bookMetadata,
	bookMetadataBullet,
	bookBlurb,
} from "./book-card.css"
import { Book } from "../models/book"
import { sprinkles } from "../sprinkles/sprinkles.css"

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
					{book.level}
				</p>
				<a href={book.href} target="_blank" rel="noopener noreferrer">
					<H className={bookTitle}>{book.title}</H>
				</a>
				<p className={bookMetadata}>
					{book.authors.join(", ")}
					<span className={bookMetadataBullet}> • </span>
					{book.yearOfPublication}
					<span className={bookMetadataBullet}> • </span>
					{book.numberOfPages} pages
				</p>
			</header>
			<p className={bookBlurb}>{book.description}</p>
		</article>
	)
}
