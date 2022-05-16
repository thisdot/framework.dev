import classNames from "classnames"
import React from "react"
import {
	resourcesInfoBannerCardsStyle,
	resourcesInfoBannerDescriptionStyle,
	resourcesInfoBannerHeadingStyle,
	resourcesInfoBannerStyle,
} from "./resources-info-banner.css"

// Test
import { LinkCardGroup as LinkCardGroupComponent } from "./link-card-group"
import { LinkCardProps } from "./link-card"

export interface ResourcesInfoBannerProps
	extends React.ComponentPropsWithoutRef<"div"> {
	title: string
	description: string
	cardResources: LinkCardProps[]
}

export function ResourcesInfoBanner({
	children,
	className,
	cardResources,
	title,
	description,
	...props
}: ResourcesInfoBannerProps) {
	return (
		<div className={classNames(className, resourcesInfoBannerStyle)} {...props}>
			<h4 className={resourcesInfoBannerHeadingStyle}>{title}</h4>
			<p className={resourcesInfoBannerDescriptionStyle}>{description}</p>
			<LinkCardGroupComponent
				className={resourcesInfoBannerCardsStyle}
				cards={cardResources}
				bigSizeGroup={false}
			/>
		</div>
	)
}
