import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
    {
        title: "",
        author: "",
        description: "",
        image: "",
        href: "",
        tags: []
    }
]
