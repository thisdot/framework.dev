import React from "react"
import { Podcast } from "../../models/podcast"
import { getRandomNumberArray } from "./utils"
import { ContentBanner } from "./content-banner"

export interface PodcastsProps extends React.ComponentPropsWithoutRef<"div"> {
	podcasts: Podcast<string>[]
}

export function Podcasts({ className, podcasts, ...props }: PodcastsProps) {
	const indices = getRandomNumberArray(4, podcasts.length)
	const randomPodcasts = indices.map((i) => podcasts[i])
	return (
		<ContentBanner
			title="Get smarter on the go"
			viewAll={{ title: "View all podcasts", href: "/categories/podcasts" }}
			items={randomPodcasts.map((podcast) => {
				return {
					title: podcast.title,
					metadata: podcast.hosts.join(", "),
					image: podcast.image,
					href: podcast.href,
				}
			})}
			{...props}
		/>
	)
}
