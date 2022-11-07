import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to Svelte, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/?filter=Svelte#result",
		tags: [],
	},
	{
		title: "Blog • Svelte",
		author: "Svelte.dev Contributors",
		description: "Official Svelte blog",
		image: "https://svelte.dev/favicon.png",
		href: "https://svelte.dev/blog",
		tags: [],
	},
]
