import classNames from "classnames"
import React, { useRef, useState } from "react"
import { AttributeDefinition } from "../../models/all-categories"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { formatFieldValue } from "../../util/string-utils"
import { CardDivider } from "../card-divider"
import { CardSelector } from "./card-selector"
import { DiscreteAttribute } from "../discrete-attribute"
import { InfoPopup } from "../info-popup"
import {
	bookImageContainerStyle,
	resourceCardBodyStyle,
	resourceCardBookImageDecoration,
	resourceCardFooterStyle,
	resourceCardHeaderStyle,
	resourceCardImageContainerStyle,
	resourceCardImageStyle,
	resourceCardStyle,
	resourceCardSubtitleStyle,
	resourceCardTitleContainerStyle,
	resourceCardTitleStyle,
} from "./resource-card.css"
import { Tag } from "../tag"
import { useId } from "@reach/auto-id"
import { BookDecorator } from "../book-decorator"

export interface ResourceCardProps
	extends Omit<
		React.ComponentPropsWithoutRef<"article">,
		"onSelect" | "title"
	> {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	title: React.ReactNode
	subtitle: React.ReactNode
	badges?: React.ReactNode
	image?: string
	attributes?: AttributeDefinition[]
	layout?: "titleFirst" | "imageFirst"
	imageLayout?: "logo" | "book"
	href: string
	tags: string[]
	selected?: boolean
	onSelect?: (selected: boolean) => void
	onTagClick: (tag: string) => void
}

export function ResourceCard({
	headingTag: H,
	children,
	className,
	title,
	subtitle,
	image,
	layout = "titleFirst",
	imageLayout = "logo",
	href,
	tags,
	attributes = [],
	selected = false,
	onSelect,
	badges,
	onTagClick,
	...props
}: ResourceCardProps) {
	const maxTags = maxTagsByLayout[layout]
	const visibleTags = tags.length > maxTags ? tags.slice(0, maxTags - 1) : tags
	const tagsInPopup = tags.length > maxTags ? tags.slice(maxTags - 1) : []
	const [popupOpen, setPopupOpen] = useState(false)
	const popupButtonRef = useRef(null)
	const titleId = useId()
	return (
		<article
			aria-labelledby={titleId}
			data-selected={onSelect ? selected : undefined}
			className={classNames(className, resourceCardStyle[layout])}
			{...props}
		>
			{image && (
				<div
					className={classNames(
						resourceCardImageContainerStyle,
						imageLayout === "book" && bookImageContainerStyle
					)}
				>
					{imageLayout === "book" && layout === "imageFirst" ? (
						<BookImageDecoration>
							<img src={image} className={resourceCardImageStyle} alt="" />
						</BookImageDecoration>
					) : (
						<img src={image} className={resourceCardImageStyle} alt="" />
					)}
				</div>
			)}
			<header className={resourceCardHeaderStyle}>
				<div className={resourceCardTitleContainerStyle}>
					<a href={href} target="_blank" rel="noreferrer">
						<H className={resourceCardTitleStyle} id={titleId}>
							{title}
						</H>
					</a>
					<p className={resourceCardSubtitleStyle}>{subtitle}</p>
				</div>
				{onSelect && (
					<CardSelector
						checked={selected}
						onChange={(e) => {
							e.stopPropagation()

							return onSelect(e.target.checked)
						}}
					/>
				)}
			</header>
			<div className={resourceCardBodyStyle}>
				{attributes.length > 0 && (
					<div
						className={sprinkles({ layout: "row", gap: 12, color: "softText" })}
					>
						{attributes.map((attribute, index) => (
							<DiscreteAttribute colorize attribute={attribute} key={index} />
						))}
					</div>
				)}
				{children}
			</div>
			<footer className={resourceCardFooterStyle}>
				{badges && (
					<>
						<div
							className={classNames(
								sprinkles({
									layout: "row",
									gap: 4,
									paddingBottom: 12,
									flexWrap: "wrap",
								}),
								"hide-in-percy"
							)}
						>
							{badges}
						</div>
						<CardDivider
							className={sprinkles({
								marginBottom: 12,
							})}
						/>
					</>
				)}
				<div className={sprinkles({ layout: "row", gap: 4 })}>
					{visibleTags.map((tag) => (
						<Tag
							key={tag}
							onClick={() => onTagClick(tag)}
							aria-label={`Filter results by ${formatFieldValue(tag)}`}
						>
							{formatFieldValue(tag)}
						</Tag>
					))}
					{tagsInPopup.length > 0 && (
						<Tag
							onClick={() => setPopupOpen(true)}
							ref={popupButtonRef}
							aria-label={`View ${tagsInPopup.length} more tags`}
						>
							{tagsInPopup.length}+
						</Tag>
					)}
					<InfoPopup
						isOpen={popupOpen}
						onDismiss={() => setPopupOpen(false)}
						targetRef={popupButtonRef}
					>
						<div
							className={sprinkles({
								layout: "row",
								gap: 4,
								flexWrap: "wrap",
							})}
						>
							{tagsInPopup.map((tag) => (
								<Tag
									key={tag}
									onClick={() => onTagClick(tag)}
									aria-label={`Filter results by ${formatFieldValue(tag)}`}
								>
									{formatFieldValue(tag)}
								</Tag>
							))}
						</div>
					</InfoPopup>
				</div>
			</footer>
		</article>
	)
}

export const BookImageDecoration: React.FunctionComponent = ({ children }) => (
	<BookDecorator className={resourceCardBookImageDecoration}>
		{children}
	</BookDecorator>
)

const maxTagsByLayout = {
	titleFirst: 3,
	imageFirst: 2,
}
