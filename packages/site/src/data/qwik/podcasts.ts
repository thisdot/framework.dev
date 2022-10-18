import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "test",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg",
		hosts: ["ThisDot Labs"],
		description: "test test test.",
		rss: "https://www.podbean.com/site/podcatcher/index/blog/7YqKYcoGcvP",
		href: "https://modernweb.podbean.com/",
		tags: ["general"],
	},
]
