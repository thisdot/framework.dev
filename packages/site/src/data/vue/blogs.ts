import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "The Vue Point",
		author: "Evan You",
		description: "Updates, tips & opinions from the maintainers of Vue.js.",
		image: "https://github.com/yyx990803.png",
		href: "https://blog.vuejs.org/",
		tags: [],
	},
]
