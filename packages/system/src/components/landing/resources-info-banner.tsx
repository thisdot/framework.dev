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
import { vars } from "../../themes/themes.css"

export interface ResourcesInfoBannerProps
	extends React.ComponentPropsWithoutRef<"div"> {
	title: string
	description: string
	resourceCards: LinkCardProps[]
	backgroundColor?: string
}

export function ResourcesInfoBanner({
	children,
	className,
	resourceCards,
	title,
	description,
	backgroundColor = '',
	...props
}: ResourcesInfoBannerProps) {
	return (
		<div
			{...props}
			className={classNames(className, resourcesInfoBannerStyle)}
			style={
				{ "--banner-background": backgroundColor || vars.palette.neutralVariant99 } as React.CSSProperties
			}
		>
			<h4 className={resourcesInfoBannerHeadingStyle}>{title}</h4>
			<p className={resourcesInfoBannerDescriptionStyle}>{description}</p>
			<LinkCardGroupComponent
				className={resourcesInfoBannerCardsStyle}
				cards={resourceCards}
			/>
		</div>
	)
}
