import classNames from "classnames"
import React from "react"
import { tagStyle } from "./tag.css"

export interface TagProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: Parameters<typeof tagStyle>[0]["color"]
}

export function Tag({ children, color, className, href, ...props }: TagProps) {
	return (
		<a
			href={href}
			className={classNames(className, tagStyle({ color }))}
			{...props}
		>
			{children}
		</a>
	)
}
