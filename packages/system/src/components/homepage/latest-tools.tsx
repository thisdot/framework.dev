import classNames from "classnames"
import React from "react"
import { Tool } from "../../models/tool"
import { latestToolsStyle } from "./latest-tools.css"
import { ResourceList } from "./resource-list"
import { getRandomNumberArray } from "./utils"

export interface LatestToolsProps
	extends React.ComponentPropsWithoutRef<"div"> {
	tools: Tool<string>[]
}

export function LatestTools({ className, tools, ...props }: LatestToolsProps) {
	const indices = getRandomNumberArray(4, tools.length)
	const randromTools = indices.map((i) => tools[i])
	return (
		<ResourceList
			className={classNames(className, latestToolsStyle)}
			title="Latest tools"
			viewAll={{ title: "View all tools", href: "/categories/blogs" }}
			items={randromTools.map((tool) => {
				return {
					image: tool.image,
					title: tool.name,
					metadata: tool.author,
					href: tool.href,
					description: tool.description,
				}
			})}
			{...props}
		/>
	)
}
