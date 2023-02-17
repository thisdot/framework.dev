import classNames from 'classnames'
import React from 'react'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { Tag } from '../tag'
import { formatFieldValue } from '../../util/string-utils'
import {
	resourceListStyle,
	resourceListHeadingStyle,
	resourceListListStyle,
	resourceListItemStyle,
	resourceListItemHeaderStyle,
	resourceListItemTitleStyle,
	resourceListItemMetadataStyle,
	resourceListItemImageStyle,
	resourceListItemDescriptionStyle,
	resourceListViewAllStyle,
} from './resource-list.css'

export interface ResourceListProps
	extends React.ComponentPropsWithoutRef<'div'> {
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
		tags?: string[]
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
			<h2 className={resourceListHeadingStyle}>{title}</h2>
			<div className={sprinkles({ layout: 'stack', gap: 16 })}>
				<ul className={resourceListListStyle}>
					{items.map((item) => {
						return (
							<li
								key={`resource-${item.title}`}
								className={resourceListItemStyle}
							>
								<a href={item.href} target="_blank" rel="noreferrer">
									<div className={resourceListItemHeaderStyle}>
										{item.image && (
											<img
												src={item.image}
												className={resourceListItemImageStyle}
												alt=""
											/>
										)}
										<div>
											<h3 className={resourceListItemTitleStyle}>
												{item.title}
											</h3>
											<p className={resourceListItemMetadataStyle}>
												{item.metadata}
											</p>
										</div>
									</div>
									<p className={resourceListItemDescriptionStyle}>
										{item.description}
									</p>
									{item.tags && (
										<div>
											{item.tags?.map((tag) => (
												<Tag key={formatFieldValue(tag)}>
													{formatFieldValue(tag)}
												</Tag>
											))}
										</div>
									)}
								</a>
							</li>
						)
					})}
				</ul>
				<a href={viewAll.href} className={resourceListViewAllStyle}>
					{viewAll.title}
				</a>
			</div>
		</div>
	)
}
