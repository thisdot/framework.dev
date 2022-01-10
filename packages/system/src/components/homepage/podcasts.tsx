import React from "react"
import { sampleSize } from "lodash"
import { Podcast } from "../../models/podcast"
import { ContentBanner } from "./content-banner"

export interface PodcastsProps extends React.ComponentPropsWithoutRef<"div"> {
	podcasts: Podcast<string>[]
}

export function Podcasts({ className, podcasts, ...props }: PodcastsProps) {
	const randomPodcasts = sampleSize(podcasts, 4)
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
