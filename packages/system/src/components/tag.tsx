import classNames from "classnames"
import React from "react"
import { tagContainerStyle, tagTextStyle } from "./tag.css"

export interface TagProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Tag = React.forwardRef(function Tag(
	{ children, className, href, ...props }: TagProps,
	ref: React.Ref<HTMLSpanElement>
) {
	return (
		<span ref={ref} className={classNames(className, tagContainerStyle)}>
			<a href={href} className={tagTextStyle} {...props}>
				{children}
			</a>
		</span>
	)
})
