import classNames from "classnames"
import React from "react"
import { blogsStyle } from "./blogs.css"
import { Blog } from "../../models/blog"
import { ResourceList } from "./resource-list"
import { getRandomNumberArray } from "./utils"

export interface BlogsProps extends React.ComponentPropsWithoutRef<"div"> {
	blogs: Blog<string>[]
}

export function Blogs({ className, blogs, ...props }: BlogsProps) {
	const indices = getRandomNumberArray(4, blogs.length)
	const randomBlogs = indices.map((i) => blogs[i])
	return (
		<ResourceList
			className={classNames(className, blogsStyle)}
			title="Useful blogs"
			viewAll={{ title: "View all blogs", href: "/categories/blogs" }}
			items={randomBlogs.map((blog) => {
				return {
					image: blog.image,
					title: blog.title,
					metadata: blog.author,
					href: blog.href,
					description: blog.description,
				}
			})}
			{...props}
		/>
	)
}
