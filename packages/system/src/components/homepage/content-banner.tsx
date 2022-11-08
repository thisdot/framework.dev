import classNames from "classnames"
import React from "react"
import { sampleSize } from "lodash"
import {
	contentBannerStyle,
	contentBannerTextAreaStyle,
	contentBannerHeadingStyle,
	contentBannersViewAllStyle,
	contentBannerCardImageStyle,
	contentBannerTitleStyle,
	contentBannerHostStyle,
} from "./content-banner.css"

export interface ContentBannerProps
	extends React.ComponentPropsWithoutRef<"div"> {
	title: string
	viewAll: { title: string; href: string }
	items: {
		title: string
		metadata: string
		image?: string
		href: string
	}[]
}

export function ContentBanner({
	children,
	className,
	title,
	viewAll,
	items,
	...props
}: ContentBannerProps) {
	const randomItems = sampleSize(items, 4)
	return (
		<div className={classNames(className, contentBannerStyle)} {...props}>
			<div className={contentBannerTextAreaStyle}>
				<h2 className={contentBannerHeadingStyle}>Get smarter on the go</h2>
				<a className={contentBannersViewAllStyle} href={viewAll.href}>
					{viewAll.title}
				</a>
			</div>
			{randomItems.map((item) => (
				<a
					key={item.title}
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className={contentBannerCardImageStyle}
						src={item.image}
						alt=""
					/>
					<h3 className={contentBannerTitleStyle}>{item.title}</h3>
					<p className={contentBannerHostStyle}>{item.metadata}</p>
				</a>
			))}
		</div>
	)
}
