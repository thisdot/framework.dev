import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "Modern Web",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg",
		hosts: ["This Dot Media"],
		description:
			"Modern Web is a podcast that explores next generation frameworks, standards, and techniques.",
		rss: "https://feed.podbean.com/modernweb/feed.xml",
		href: "https://modernweb.podbean.com",
		tags: ["general"],
	},
	{
		title: "Node University",
		image:
			"https://image.simplecastcdn.com/images/22e03652-cb4c-4b80-920e-6a552342f860/3d943f85-29f1-4f33-ab5e-0d5f6c74edec/480x480/1515463707-artwork@2x.jpg",
		hosts: ["Azat Mardan"],
		description:
			"Short lectures on software development with Node.js, JavaScript, and React.",
		rss: "https://feeds.simplecast.com/GlwKW4VA",
		href: "https://nodeuniversity.simplecast.com/",
		tags: ["general"],
	},
]
