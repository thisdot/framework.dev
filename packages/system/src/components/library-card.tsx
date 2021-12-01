import { Library } from "../models/library"
import {
	libraryCardBadgeStyle,
} from "./library-card.css"
import {
	getGitHubStarsBadge,
	getNpmDownloadsBadge,
	getBundleSizeBadge,
} from "../util/stats-util"
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
			href={library.href}
			tags={library.tags}
			badges={
				<>
					<Badge data={getGitHubStarsBadge(library.gitHubRepo)} />
					<Badge data={getNpmDownloadsBadge(library.npmPackage)} />
					<Badge data={getBundleSizeBadge(library.npmPackage)} />
				</>
			}
			{...props}
		>
			{library.description}
		</ResourceCard>
	)
}

function Badge({ data }: { data: string }) {
	return <img className={libraryCardBadgeStyle} src={data} />
}
