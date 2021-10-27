import classNames from "classnames"
import React from "react"
import { tagStyle } from "./tag.css"

export interface TagProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Tag({ children, className, href, ...props }: TagProps) {
	return (
		<a href={href} className={classNames(className, tagStyle)} {...props}>
			{children}
		</a>
	)
}
