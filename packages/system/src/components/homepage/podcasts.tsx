import classNames from "classnames"
import React from "react"
import { podcastsStyle } from "./podcasts.css"
import { Podcast } from "../../models/podcast"
import { generateRandomIndex } from "./utils"

export interface PodcastsProps extends React.ComponentPropsWithoutRef<"div"> {
	podcasts: Podcast<string>[]
}

export function Podcasts({
	children,
	className,
	podcasts,
	...props
}: PodcastsProps) {
	const indices: number[] = []
	while (indices.length < 4) {
		const num = generateRandomIndex(podcasts.length)
		if (!indices.includes(num)) indices.push(num)
	}
	const randomPodcasts: Podcast<string>[] = indices.map((i) => podcasts[i])
	return (
		<div className={classNames(className, podcastsStyle)} {...props}>
			<div style={{ gridArea: "text" }}>
				<h2>Get smarter on the go</h2>
				<a href="/categories/podcasts">View all podcasts</a>
			</div>
			{randomPodcasts.map((podcast) => (
				<div key={podcast.title}>
					<img src={podcast.image} />
					<h3>{podcast.title}</h3>
					<p>{podcast.hosts.join(", ")}</p>
					<p>{podcast.description}</p>
				</div>
			))}
		</div>
	)
}
