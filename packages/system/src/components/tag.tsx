import classNames from "classnames"
import React from "react"
import { tagContainerStyle, tagTextStyle } from "./tag.css"

export interface TagProps extends React.ComponentPropsWithoutRef<"button"> {}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(
	{ children, className, ...props },
	ref
) {
	return (
		<span ref={ref} className={classNames(className, tagContainerStyle)}>
			<button type="button" className={tagTextStyle} {...props}>
				{children}
			</button>
		</span>
	)
})
