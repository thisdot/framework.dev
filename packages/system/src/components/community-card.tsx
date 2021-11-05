import React from "react"
import { kebabCase } from "lodash"
import { Community } from "../models/community"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	communityCardBodyStyle,
	communityCardHeaderStyle,
	communityCardInfoStyle,
	communityCardStyle,
} from "./community-card.css"
import { Tag } from "./tag"
import classnames from "classnames"

export type CommunityCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	community: Community<string>
}

export function CommunityCard({
	className,
	community,
	headingTag: H,
	...props
}: CommunityCardProps) {
	return (
		<article className={classnames(className, communityCardStyle)} {...props}>
			<header className={communityCardHeaderStyle}>
				<img
					src={community.image}
					className={sprinkles({ border: "thin" })}
					aria-hidden
					height={40}
					width={40}
				/>
				<div className={sprinkles({ layout: "stack", gap: 4 })}>
					<a href={community.href} target="_blank" rel="noreferrer">
						<H
							className={sprinkles({
								margin: 0,
								textStyle: "minorHeading",
								fontWeight: "bold",
								color: "strongText",
							})}
						>
							{community.name}
						</H>
					</a>
				</div>
			</header>
			<div className={communityCardInfoStyle}>
				{community.tags.map((tag) => (
					<Tag key={tag} href={`/categories/communitys/tags/${kebabCase(tag)}`}>
						{tag}
					</Tag>
				))}
			</div>
			<p className={communityCardBodyStyle}>{community.description}</p>
		</article>
	)
}
