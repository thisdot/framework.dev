import classNames from "classnames"
import React from "react"
import { featuredLibrariesStyle } from "./featured-libraries.css"

export interface FeaturedLibrariesProps
	extends React.ComponentPropsWithoutRef<"div"> {}

export function FeaturedLibraries({
	children,
	className,
	...props
}: FeaturedLibrariesProps) {
	return (
		<div className={classNames(className, featuredLibrariesStyle)} {...props}>
			{children}
		</div>
	)
}
