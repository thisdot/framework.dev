import { Card } from "./card"

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
			<img src={image} />
			<p>{difficulty}</p>
			<a href={slug} target="_blank" rel="noopener noreferrer">
				<h1>{title}</h1>
			</a>
			<p>{`${authors.join(", ")} • ${year} • ${pages} pages`}</p>
			<p>{blurb}</p>
		</Card>
	)
}
