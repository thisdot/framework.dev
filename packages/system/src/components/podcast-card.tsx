import classNames from "classnames"
import React from "react"
import { kebabCase } from "lodash"
import { Podcast } from "../models/podcast"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	podcastCardBodyStyle,
	podcastCardFooterStyle,
	podcastCardHeaderStyle,
	podcastCardInfoStyle,
	podcastCardSpacerStyle,
	podcastCardStyle,
} from "./podcast-card.css"
import { Tag } from "./tag"
import classnames from "classnames"
import { ResourceTag } from "./resource-tag"

export type PodcastCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	podcast: Podcast<string>
	lastPublishedDate?: string
}

export function PodcastCard({
	className,
	podcast,
	lastPublishedDate,
	headingTag: H,
	...props
}: PodcastCardProps) {
	return (
		<article className={classNames(className, podcastCardStyle)} {...props}>
			<header className={podcastCardHeaderStyle}>
				<img
					src={podcast.image}
					className={sprinkles({ border: "thin" })}
					aria-hidden
					height={40}
					width={40}
				/>
				<div className={sprinkles({ layout: "stack", gap: 4 })}>
					<a href={podcast.href} target="_blank" rel="noreferrer">
						<H
							className={sprinkles({
								margin: 0,
								textStyle: "minorHeading",
								fontWeight: "bold",
								color: "strongText",
							})}
						>
							{podcast.title}
						</H>
					</a>
					<p className={sprinkles({ textStyle: "subHeading" })}>
						{podcast.hosts.join(", ")}
					</p>
				</div>
			</header>
			<div className={podcastCardInfoStyle}>
				{podcast.tags.map((tag) => (
					<Tag key={tag} href={`/categories/libraries/tags/${kebabCase(tag)}`}>
						{tag}
					</Tag>
				))}
			</div>
			<div>
				<p className={podcastCardBodyStyle}>{podcast.description}</p>
				{lastPublishedDate && (
					<p
						className={sprinkles({ textStyle: "subHeading", paddingTop: 12 })}
					>{`Last published: ${lastPublishedDate}`}</p>
				)}
			</div>
			<div className={podcastCardSpacerStyle} />
			<footer className={classnames(podcastCardFooterStyle, "hide-in-percy")}>
				<ResourceTag href={podcast.rss} icon="rss">
					Podcast RSS Feed
				</ResourceTag>
			</footer>
		</article>
	)
}
