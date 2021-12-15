import classNames from "classnames"
import React from "react"
import { blogsStyle } from "./blogs.css"
import { Blog } from "../../models/blog"
import { ResourceList } from "./resource-list"

export interface BlogsProps extends React.ComponentPropsWithoutRef<"div"> {
	blogs: Blog<string>[]
}

export function Blogs({ className, blogs, ...props }: BlogsProps) {
	return (
		<ResourceList
			className={classNames(className, blogsStyle)}
			title="Useful blogs"
			viewAll={{ title: "View all blogs", href: "/categories/blogs" }}
			items={blogs.map((blog) => {
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
