import classNames from "classnames"
import React from "react"
import { Tool } from "../../models/tool"
import { latestToolsStyle } from "./latest-tools.css"

export interface LatestToolsProps
	extends React.ComponentPropsWithoutRef<"div"> {
	tools: Tool<string>[]
}

export function LatestTools({
	children,
	className,
	tools,
	...props
}: LatestToolsProps) {
	return (
		<div className={classNames(className, latestToolsStyle)} {...props}>
			{children}
		</div>
	)
}
