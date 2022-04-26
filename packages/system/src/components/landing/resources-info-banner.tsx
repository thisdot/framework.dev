import classNames from "classnames"
import React from "react"
import {
	resourcesInfoBannerDescriptionStyle,
	resourcesInfoBannerHeadingStyle,
	resourcesInfoBannerStyle,
} from "./resources-info-banner.css"

export interface ResourcesInfoBannerProps
	extends React.ComponentPropsWithoutRef<"div"> {
		title: string;
		description: string;
	}

export function ResourcesInfoBanner({
	children,
	className,
	...props
}: ResourcesInfoBannerProps) {
	return (
		<div className={classNames(className, resourcesInfoBannerStyle)} {...props}>
			<h4 className={resourcesInfoBannerHeadingStyle}>Get smarter on the go</h4>
			<p className={resourcesInfoBannerDescriptionStyle}>hey</p>
			<p>hey</p>
		</div>
	)
}
