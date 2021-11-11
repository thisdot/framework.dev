import { kebabCase } from "lodash"
import classNames from "classnames"
import React from "react"
import { Tool } from "../models/tool"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	toolCardBodyStyle,
	toolCardFooterStyle,
	toolCardHeaderStyle,
	toolCardStyle,
} from "./tool-card.css"
import { ResourceTag } from "./resource-tag"
import { CardDivider } from "./card-divider"
import { Tag } from "./tag"

export type ToolCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	tool: Tool<string>
}

export function ToolCard({
	className,
	tool,
	headingTag: H,
	...props
}: ToolCardProps) {
	return (
		<article className={classNames(className, toolCardStyle)} {...props}>
			<header className={toolCardHeaderStyle}>
				<img
					src={tool.image}
					className={sprinkles({ border: "thin" })}
					aria-hidden
					height={40}
					width={40}
				/>
				<div className={sprinkles({ layout: "stack", gap: 4 })}>
					<a href={tool.href} target="_blank" rel="noreferrer">
						<H
							className={sprinkles({
								margin: 0,
								textStyle: "minorHeading",
								fontWeight: "bold",
								color: "strongText",
							})}
						>
							{tool.name}
						</H>
					</a>
					<p
						className={sprinkles({
							textStyle: "bodyShort3",
							color: "softText",
						})}
					>
						{tool.author}
					</p>
				</div>
			</header>
			<div className={toolCardBodyStyle}>{tool.description}</div>
			<footer className={toolCardFooterStyle}>
				<div className={sprinkles({ layout: "row", gap: 4 })}>
					{/* <ResourceTag
						icon={tool.format}
						href={`/categories/tools/formats/${tool.format}`}
					>
						{tool.format}
					</ResourceTag> */}
				</div>
				<CardDivider />
				<div className={sprinkles({ layout: "row", gap: 4 })}>
					{tool.tags.map((tag) => (
						<Tag key={tag} href={`/categories/tools/tags/${kebabCase(tag)}`}>
							{tag}
						</Tag>
					))}
				</div>
			</footer>
		</article>
	)
}
