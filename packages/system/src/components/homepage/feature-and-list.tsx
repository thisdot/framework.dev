import classNames from "classnames"
import React from "react"
import {
	featureAndListStyle,
	featureAndListHeadingStyle,
	featureAndListBoxStyle,
	featureAndListFeaturedStyle,
	featureAndListFeatureImageStyle,
	featureAndListFeatureTitleStyle,
	featureAndListMetadataStyle,
	featureAndListFeatureAttributesStyle,
	featureAndListFeatureDescription,
	featureAndListListStyle,
	featureAndListViewAllStyle,
} from "./feature-and-list.css"
import { AttributeDefinition } from "../../models/all-categories"
import { DiscreteAttribute } from "../discrete-attribute"

export interface FeatureAndListProps
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
		attributes: AttributeDefinition[]
		description: string
	}[]
}

export function FeatureAndList({
	className,
	title,
	viewAll,
	items,
	...props
}: FeatureAndListProps) {
	const featured = items[0]
	return (
		<div className={classNames(className, featureAndListStyle)} {...props}>
			<h2 className={featureAndListHeadingStyle}>{title}</h2>
			<div className={featureAndListBoxStyle}>
				<div className={featureAndListFeaturedStyle}>
					{featured.image && (
						<img
							className={featureAndListFeatureImageStyle}
							src={featured.image}
							alt=""
						/>
					)}
					<h3 className={featureAndListFeatureTitleStyle}>{featured.title}</h3>
					<p className={featureAndListMetadataStyle}>{featured.metadata}</p>
					<div className={featureAndListFeatureAttributesStyle}>
						{featured.attributes.map((attribute) => {
							return (
								<DiscreteAttribute
									key={`${featured.title}-${attribute[0]}`}
									attribute={attribute}
									colorize={true}
								/>
							)
						})}
					</div>
					<p className={featureAndListFeatureDescription}>
						{featured.description}
					</p>
				</div>
				<div className={featureAndListListStyle}></div>
			</div>
			<a href={viewAll.href} className={featureAndListViewAllStyle}>
				{viewAll.title}
			</a>
		</div>
	)
}
