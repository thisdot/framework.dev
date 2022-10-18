import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
	  title: "test",
	  author: "test",
	  description: "test.",
	  image: "https://github.com/uidotdev.png",
	  href: "https://ui.dev/blog/",
	  tags: []
	},
]
