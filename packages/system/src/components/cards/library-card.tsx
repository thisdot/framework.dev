import { Library } from "../../models/library"
import { libraryCardBadgeStyle } from "./library-card.css"
import {
	getGitHubStarsBadge,
	getNpmDownloadsBadge,
	getBundleSizeBadge,
} from "../../util/stats-util"
import { ResourceCard, ResourceCardProps } from "./resource-card"

export type LibraryCardProps = Omit<
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
	library: Library<string>
}

export function LibraryCard({ library, ...props }: LibraryCardProps) {
	return (
		<ResourceCard
			title={library.name}
			subtitle={library.author}
			image={library.image}
			darkImageBackground={library.darkImageBackground}
			href={library.href}
			tags={library.tags}
			badges={
				<>
					<Badge
						data={getGitHubStarsBadge(library.gitHubRepo)}
						href={`https://www.github.com/${library.gitHubRepo}`}
						label={`${library.name} GitHub Repository`}
					/>
					<Badge
						data={getNpmDownloadsBadge(library.npmPackage)}
						href={`https://www.npmjs.com/package/${library.npmPackage}`}
						label={`${library.name} NPM Package`}
					/>
					<Badge
						data={getBundleSizeBadge(library.npmPackage)}
						href={`https://bundlephobia.com/package/${library.npmPackage}`}
						label={`${library.name} Bundle Size Stats`}
					/>
				</>
			}
			{...props}
		>
			{library.description}
		</ResourceCard>
	)
}

type BadgeProps = {
	data: string
	href: string
	label: string
}

function Badge({ data, href, label }: BadgeProps) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<img className={libraryCardBadgeStyle} src={data} alt={label} />
		</a>
	)
}
