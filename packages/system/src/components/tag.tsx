import classNames from "classnames"
import React from "react"
import { tagContainerStyle, tagTextStyle } from "./tag.css"

export interface TagProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: Parameters<typeof tagContainerStyle>[0]["color"]
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
