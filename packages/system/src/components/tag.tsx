import classNames from "classnames"
import React from "react"
import { tagContainerStyle, TagContainerVariants, tagTextStyle } from "./tag.css"

export interface TagProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: TagContainerVariants["color"]
}

export function Tag({ children, color, className, href, ...props }: TagProps) {
	return (
		<span className={classNames(className, tagContainerStyle({ color }))}>
			<a href={href} className={tagTextStyle} {...props}>
				{children}
			</a>
		</span>
	)
}
