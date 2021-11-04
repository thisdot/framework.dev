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
import classnames from "classnames"

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
			<footer className={classnames(libraryCardFooterStyle, "hide-in-percy")}>
				<Badge
					data={`https://img.shields.io/github/stars/${library.gitHubRepo}?style=flat&logo=github`}
				/>
				<Badge
					data={`https://img.shields.io/stackexchange/stackoverflow/t/${library.npmPackage}?style=flat&logo=stackoverflow&label=questions&link=https://stackoverflow.com/search?q=${library.npmPackage}`}
				/>
				<Badge
					data={`https://img.shields.io/npm/dm/${library.npmPackage}?style=flat&logo=npm&link=https://www.npmjs.com/package/${library.npmPackage}`}
				/>
				<Badge
					data={`https://img.shields.io/bundlephobia/min/${library.npmPackage}?style=flat&logo=npm&link=https://bundlephobia.com/package/${library.npmPackage}`}
				/>
			</footer>
		</article>
	)
}

function Badge({ data }: { data: string }) {
	return (
		<object
			className={libraryCardBadgeStyle}
			type="image/svg+xml"
			data={data}
		/>
	)
}
