import { Card } from "./card"
import {
	BookImage,
	BookDifficulty,
	BookTitle,
	BookMetadata,
	BookMetadataBullet,
	BookBlurb,
} from "./book-card.css"
import { Book } from "../models/book"

export type BookCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	book: Book<string>
}

export function BookCard({
	book,
	headingTag: H = "h1",
	...props
}: BookCardProps) {
	return (
		<Card {...props}>
			<article>
				<header>
					<img className={BookImage} src={book.image} />
					<p className={BookDifficulty({ difficulty: book.level })}>
						{book.level}
					</p>
					<a href={book.href} target="_blank" rel="noopener noreferrer">
						<H className={BookTitle}>{book.title}</H>
					</a>
					<p className={BookMetadata}>
						{book.authors.join(", ")}
						<span className={BookMetadataBullet}> • </span>
						{book.yearOfPublication}
						<span className={BookMetadataBullet}> • </span>
						{book.numberOfPages} pages
					</p>
				</header>
				<p className={BookBlurb}>{book.description}</p>
			</article>
		</Card>
	)
}
