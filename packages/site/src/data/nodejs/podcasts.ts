import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general, node, full stack"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "",
		image: "",
		hosts: [],
		description: "",
		rss: "",
		href: "",
		tags: [],
	},
]
