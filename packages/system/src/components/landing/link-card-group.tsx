import classNames from "classnames"
import React from "react"
import { LinkCardGroupItemStyle } from "./link-card-group.css"
import { LinkCard, LinkCardProps } from "./link-card"
import { titleFirstCardGrid } from "./../cards/card-layouts.css"

export interface LinkCardGroupProps
	extends React.ComponentPropsWithoutRef<"div"> {
	cards: LinkCardProps[],
	bigSizeGroup?: boolean,
	columns?: number
}

export function LinkCardGroup({
	className,
	cards,
	columns,
	bigSizeGroup = false,
	...props
}: LinkCardGroupProps) {
	return (
		<div className={classNames(className, titleFirstCardGrid)} {...props}>
			{cards.map((card, index) => (
				<LinkCard key={index} className={LinkCardGroupItemStyle} bigSize={bigSizeGroup} {...card} />
			))}
		</div>
	)
}
