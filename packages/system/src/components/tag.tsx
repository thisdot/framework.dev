import classNames from "classnames"
import React from "react"
import {
	tagContainerStyle,
	TagContainerVariants,
	tagTextStyle,
} from "./tag.css"

export interface TagProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: TagContainerVariants["color"]
}

export const Tag = React.forwardRef(function Tag(
	{ children, color, className, href, ...props }: TagProps,
	ref: React.Ref<HTMLSpanElement>
) {
	return (
		<span
			ref={ref}
			className={classNames(className, tagContainerStyle({ color }))}
		>
			<a href={href} className={tagTextStyle} {...props}>
				{children}
			</a>
		</span>
	)
})
