import classNames from "classnames"
import React from "react"
import { blogsStyle } from "./blogs.css"
import { Blog } from "../../models/blog"

export interface BlogsProps extends React.ComponentPropsWithoutRef<"div"> {
	blogs: Blog<string>[]
}

export function Blogs({ children, className, blogs, ...props }: BlogsProps) {
	return (
		<div className={classNames(className, blogsStyle)} {...props}>
			{children}
		</div>
	)
}
