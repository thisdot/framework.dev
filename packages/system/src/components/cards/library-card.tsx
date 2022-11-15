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
					{/* TODO: For others not using GitHub decide what kind of badge to show */}
					{library?.repo.includes("github.com") ? (
						<Badge
							data={getGitHubStarsBadge(
								library.repo.replace("https://www.github.com/", "")
							)}
							href={library.repo}
							label={`${library.name} GitHub Repository`}
						/>
					) : null}
					{/* TODO: For others not using npm decide what kind of badge to show */}
					{library?.package.includes("npmjs") ? (
						<>
							<Badge
								data={getNpmDownloadsBadge(
									library.package.replace("https://www.npmjs.com/package/", "")
								)}
								href={library.package}
								label={`${library.name} NPM Package`}
							/>
							<Badge
								data={getBundleSizeBadge(
									library.package.replace("https://www.npmjs.com/package/", "")
								)}
								href={`https://bundlephobia.com/package/${library.package.replace(
									"https://www.npmjs.com/package/",
									""
								)}`}
								label={`${library.name} Bundle Size Stats`}
							/>
						</>
					) : null}
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
