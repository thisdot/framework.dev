import classNames from "classnames"
import React from "react"
import {
	resourceListStyle,
	resourceListTitleStyle,
	resourceListListStyle,
	resourceListViewAllStyle,
} from "./resource-list.css"

export interface ResourceListProps
	extends React.ComponentPropsWithoutRef<"div"> {
	title: string
	viewAll: {
		title: string
		href: string
	}
	items: {
		image?: string
		title: string
		metadata: string
		href: string
		description: string
	}[]
}

export function ResourceList({
	className,
	title,
	viewAll,
	items,
	...props
}: ResourceListProps) {
	return (
		<div className={classNames(className, resourceListStyle)} {...props}>
			<h2 className={resourceListTitleStyle}>{title}</h2>
			<ul className={resourceListListStyle}>
				{items.map((item) => {
					return (
						<li key={`resource-${item.title}`}>
							<article>
								<header>
									<a href={item.href} target="_blank" rel="noreferrer">
										<h3>{item.title}</h3>
									</a>
									<p>{item.metadata}</p>
								</header>
							</article>
						</li>
					)
				})}
			</ul>
			<a href={viewAll.href} className={resourceListViewAllStyle}>
				{viewAll.title}
			</a>
		</div>
	)
}
