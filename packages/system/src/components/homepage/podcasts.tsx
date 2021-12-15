import classNames from "classnames"
import React from "react"
import {
	podcastsStyle,
	podcastTextAreaStyle,
	podcastHeadingStyle,
	podcastsViewAllStyle,
	podcastCardImageStyle,
	podcastTitleStyle,
	podcastHostStyle,
} from "./podcasts.css"
import { Podcast } from "../../models/podcast"
import { getRandomNumberArray } from "./utils"

export interface PodcastsProps extends React.ComponentPropsWithoutRef<"div"> {
	podcasts: Podcast<string>[]
}

export function Podcasts({
	children,
	className,
	podcasts,
	...props
}: PodcastsProps) {
	const indices = getRandomNumberArray(4, podcasts.length)
	const randomPodcasts = indices.map((i) => podcasts[i])
	return (
		<div className={classNames(className, podcastsStyle)} {...props}>
			<div className={podcastTextAreaStyle}>
				<h2 className={podcastHeadingStyle}>Get smarter on the go</h2>
				<a className={podcastsViewAllStyle} href="/categories/podcasts">
					View all podcasts
				</a>
			</div>
			{randomPodcasts.map((podcast) => (
				<div key={podcast.title}>
					<img className={podcastCardImageStyle} src={podcast.image} />
					<h3 className={podcastTitleStyle}>{podcast.title}</h3>
					<p className={podcastHostStyle}>{podcast.hosts.join(", ")}</p>
				</div>
			))}
		</div>
	)
}
