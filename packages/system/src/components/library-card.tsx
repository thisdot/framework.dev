import classNames from "classnames"
import React from "react"
import { kebabCase } from "lodash"
import { Library } from "../models/library"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	libraryCardBadgeStyle,
	libraryCardBodyStyle,
	libraryCardFooterStyle,
	libraryCardHeaderStyle,
	libraryCardInfoStyle,
	libraryCardSpacerStyle,
	libraryCardStyle,
} from "./library-card.css"
import { Tag } from "./tag"
import {
	getGitHubStarsUrl,
	getNpmDownloadsUrl,
	getBundleSizeUrl,
} from "../util/stats-util"

export type LibraryCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	library: Library<string>
}

export function LibraryCard({
	className,
	library,
	headingTag: H,
	...props
}: LibraryCardProps) {
	return (
		<article className={classNames(className, libraryCardStyle)} {...props}>
			<header className={libraryCardHeaderStyle}>
				<img
					src={library.image}
					className={sprinkles({ border: "thin" })}
					aria-hidden
					height={40}
					width={40}
				/>
				<div className={sprinkles({ layout: "stack", gap: 4 })}>
					<a href={library.href} target="_blank" rel="noreferrer">
						<H
							className={sprinkles({
								margin: 0,
								textStyle: "minorHeading",
								fontWeight: "bold",
								color: "strongText",
							})}
						>
							{library.name}
						</H>
					</a>
					<p className={sprinkles({ textStyle: "subHeading" })}>
						{library.author}
					</p>
				</div>
			</header>
			<div className={libraryCardInfoStyle}>
				{library.tags.map((tag) => (
					<Tag key={tag} href={`/categories/libraries/tags/${kebabCase(tag)}`}>
						{tag}
					</Tag>
				))}
			</div>
			<div className={libraryCardBodyStyle}>{library.description}</div>
			<div className={libraryCardSpacerStyle} />
			<footer className={classNames(libraryCardFooterStyle, "hide-in-percy")}>
				<Badge data={getGitHubStarsUrl(library.gitHubRepo, "svg")} />
				<Badge data={getNpmDownloadsUrl(library.npmPackage, "svg")} />
				<Badge data={getBundleSizeUrl(library.npmPackage, "svg")} />
			</footer>
		</article>
	)
}

function Badge({ data }: { data: string }) {
	return <img className={libraryCardBadgeStyle} src={data} />
}
