import classNames from "classnames"
import React from "react"
import {
	contentBannerStyle,
	contentBannerTextAreaStyle,
	contentBannerHeadingStyle,
	contentBannersViewAllStyle,
	contentBannerCardImageStyle,
	contentBannerTitleStyle,
	contentBannerHostStyle,
} from "./content-banner.css"
import { getRandomNumberArray } from "./utils"

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
	const indices = getRandomNumberArray(4, items.length)
	const randomItems = indices.map((i) => items[i])
	return (
		<div className={classNames(className, contentBannerStyle)} {...props}>
			<div className={contentBannerTextAreaStyle}>
				<h2 className={contentBannerHeadingStyle}>Get smarter on the go</h2>
				<a className={contentBannersViewAllStyle} href={viewAll.href}>
					{viewAll.title}
				</a>
			</div>
			{randomItems.map((item) => (
				<div key={item.title}>
					<img className={contentBannerCardImageStyle} src={item.image} />
					<a href={item.href} target="_blank" rel="noopener noreferrer">
						<h3 className={contentBannerTitleStyle}>{item.title}</h3>
					</a>
					<p className={contentBannerHostStyle}>{item.metadata}</p>
				</div>
			))}
		</div>
	)
}
