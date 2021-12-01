import { Book } from "../models/book"
import { BulletDivider } from "./bullet-divider"
import { ResourceCard, ResourceCardProps } from "./resource-card"

export type BookCardProps = Omit<
	ResourceCardProps,
	| "title"
	| "subtitle"
	| "image"
	| "layout"
	| "imageLayout"
	| "href"
	| "tags"
	| "attributes"
	| "children"
> & {
	book: Book<string>
}

export function BookCard({ book, ...props }: BookCardProps) {
	return (
		<ResourceCard
			title={book.title}
			subtitle={
				<>
					{book.authors.join(", ")}
					<BulletDivider />
					{book.yearOfPublication}
					<BulletDivider />
					{book.numberOfPages} pages
				</>
			}
			image={book.image}
			layout="imageFirst"
			imageLayout="book"
			href={book.href}
			tags={book.tags}
			attributes={[["level", book.level]]}
			{...props}
		>
			{book.description}
		</ResourceCard>
	)
}
