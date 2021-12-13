import classNames from "classnames"
import React from "react"
import { latestToolsStyle } from "./latest-tools.css"

export interface LatestToolsProps
	extends React.ComponentPropsWithoutRef<"div"> {}

export function LatestTools({ children, className, ...props }: LatestToolsProps) {
	return (
		<div className={classNames(className, latestToolsStyle)} {...props}>
			{children}
		</div>
	)
}