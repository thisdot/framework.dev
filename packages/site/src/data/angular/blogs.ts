import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
    {
        title: "This Dot Blog",
        author: "This Dot Labs",
        description: "Variety of topics related to Angular, written by the team at This Dot",
        image: "https://github.com/thisdot.png",
        href: "https://www.thisdot.co/blog?filter=Angular#result",
        tags: []
      }
]
