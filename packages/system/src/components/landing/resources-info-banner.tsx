import classNames from 'classnames'
import React from 'react'
import {
	resourcesInfoBannerCardsStyle,
	resourcesInfoBannerDescriptionStyle,
	resourcesInfoBannerHeadingStyle,
	resourcesInfoBannerStyle,
} from './resources-info-banner.css'
import { LinkCardGroup as LinkCardGroupComponent } from './link-card-group'
import { LinkCardProps } from './link-card'

export interface ResourcesInfoBannerProps
	extends React.ComponentPropsWithoutRef<'div'> {
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
	...props
}: ResourcesInfoBannerProps) {
	return (
		<div {...props} className={classNames(className, resourcesInfoBannerStyle)}>
			<h2 className={resourcesInfoBannerHeadingStyle}>{title}</h2>
			<p className={resourcesInfoBannerDescriptionStyle}>{description}</p>
			<LinkCardGroupComponent
				className={resourcesInfoBannerCardsStyle}
				cards={resourceCards}
			/>
		</div>
	)
}
