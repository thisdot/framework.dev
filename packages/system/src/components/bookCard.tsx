import { Card } from "./card"
import {
	BookImage,
	BookDifficulty,
	BookTitle,
	BookMetadata,
	BookMetadataBullet,
} from "./bookCard.css"

export interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
	slug: string
	title: string
	image: string
	authors: string[]
	year: number
	pages: number
	difficulty: "beginner" | "intermediate" | "hard"
	blurb: string
}

export function BookCard({
	slug,
	title,
	image,
	authors,
	year,
	pages,
	difficulty,
	blurb,
	...props
}: BookCardProps) {
	return (
		<Card {...props}>
			<article>
				<header>
					<img className={BookImage} src={image} />
					<p className={BookDifficulty({ difficulty })}>{difficulty}</p>
					<a href={slug} target="_blank" rel="noopener noreferrer">
						<h1 className={BookTitle}>{title}</h1>
					</a>
					<p className={BookMetadata}>
						{authors.join(", ")}
						<span className={BookMetadataBullet}> • </span>
						{year}
						<span className={BookMetadataBullet}> • </span>
						{pages} pages
					</p>
				</header>
				<p>{blurb}</p>
			</article>
		</Card>
	)
}
