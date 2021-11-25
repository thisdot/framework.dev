import classNames from "classnames"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { CodeExample } from "../models/code-example"
import {
	codeExampleCardStyle,
	codeExampleCardHeaderStyle,
	codeExampleCardNameStyle,
	codeExampleCardBodyStyle,
} from "./code-example-card.css"
import { Tag } from "./tag"
import { formatFieldValue, serializeFieldValue } from "../util/string-utils"

export type CodeExampleCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	codeExample: CodeExample<string>
}

export function CodeExampleCard({
	codeExample,
	headingTag: H,
	className,
	...props
}: CodeExampleCardProps) {
	return (
		<article className={classNames(className, codeExampleCardStyle)} {...props}>
			<header className={codeExampleCardHeaderStyle}>
				<div className={codeExampleCardNameStyle}>
					<a href={codeExample.href} target="_blank" rel="noreferrer">
						<H
							className={sprinkles({
								margin: 0,
								textStyle: "bodyShort1",
								color: "strongText",
								fontWeight: "bold",
							})}
						>
							{codeExample.title}
						</H>
					</a>
					<p
						className={sprinkles({
							textStyle: "bodyShort3",
							color: "softText",
						})}
					>
						{codeExample.author}
					</p>
				</div>
			</header>
			<p className={codeExampleCardBodyStyle}>{codeExample.description}</p>
			<div
				className={sprinkles({
					layout: "row",
					gap: 4,
					paddingTop: 12,
					borderTop: "light",
				})}
			>
				{codeExample.tags.map((tag) => (
					<Tag
						key={tag}
						href={`/categories/code-examples/tags/${serializeFieldValue(tag)}`}
					>
						{formatFieldValue(tag)}
					</Tag>
				))}
			</div>
		</article>
	)
}
