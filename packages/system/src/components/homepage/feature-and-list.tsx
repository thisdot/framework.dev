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
	featureAndListListItemStyle,
	featureAndListListImageStyle,
	featureAndListListBookStyle,
	featureAndListFeatureBookContainerStyle,
	featureAndListFeatureBookStyle,
	featureAndListListTitleStyle,
	featureAndListListMetadataStyle,
	featureAndListViewAllStyle,
} from "./feature-and-list.css"
import { AttributeDefinition } from "../../models/all-categories"
import { DiscreteAttribute, DiscreteAttributeIcon } from "../discrete-attribute"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { BookDecorator } from "../book-decorator"

export interface FeatureAndListProps
	extends React.ComponentPropsWithoutRef<"div"> {
	title: string
	viewAll: {
		title: string
		href: string
	}
	items: {
		image?: {
			src: string
			style: "normal" | "book"
		}
		title: string
		metadata: string
		href: string
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
				<article className={featureAndListFeaturedStyle}>
					<a href={featured.href} target="_blank" rel="noreferrer">
						{featured.image &&
							(featured.image.style === "book" ? (
								<div className={featureAndListFeatureBookContainerStyle}>
									<BookDecorator>
										<img
											className={featureAndListFeatureBookStyle}
											src={featured.image.src}
											alt=""
										/>
									</BookDecorator>
								</div>
							) : (
								<img
									className={featureAndListFeatureImageStyle}
									src={featured.image.src}
									alt=""
								/>
							))}
						<h3 className={featureAndListFeatureTitleStyle}>
							{featured.title}
						</h3>
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
					</a>
				</article>
				<div className={featureAndListListStyle}>
					{items.slice(1).map((item) => (
						<article key={item.title}>
							<a
								href={item.href}
								target="_blank"
								rel="noreferrer"
								className={featureAndListListItemStyle}
							>
								{item.image &&
									(item.image.style === "book" ? (
										<BookDecorator>
											<img
												className={featureAndListListBookStyle}
												src={item.image.src}
												alt=""
											/>
										</BookDecorator>
									) : (
										<img
											className={featureAndListListImageStyle}
											src={item.image.src}
											alt=""
										/>
									))}
								<div className={sprinkles({ layout: "stack", gap: 4 })}>
									<h3 className={featureAndListListTitleStyle}>{item.title}</h3>
									<div className={featureAndListListMetadataStyle}>
										<p>{item.metadata}</p>
										{featured.attributes.map((attribute) => {
											return (
												<DiscreteAttributeIcon
													key={`${featured.title}-${attribute[0]}`}
													attribute={attribute}
													colorize={true}
												/>
											)
										})}
									</div>
								</div>
							</a>
						</article>
					))}
				</div>
			</div>
			<a href={viewAll.href} className={featureAndListViewAllStyle}>
				{viewAll.title}
			</a>
		</div>
	)
}
