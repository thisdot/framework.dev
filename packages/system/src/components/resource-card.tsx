import classNames from "classnames"
import React, { useRef, useState } from "react"
import { AttributeDefinition } from "../models/all-categories"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { formatFieldValue } from "../util/string-utils"
import { CardSelector } from "./card-selector"
import { DiscreteAttribute } from "./discrete-attribute"
import { InfoPopup } from "./info-popup"
import {
	resourceCardBodyStyle,
	resourceCardBookImageDecoration,
	resourceCardFooterStyle,
	resourceCardHeaderStyle,
	resourceCardImageContainerStyle,
	resourceCardImageStyle,
	resourceCardStyle,
	resourceCardSubtitleStyle,
	resourceCardTitleStyle,
} from "./resource-card.css"
import { Tag } from "./tag"

export interface ResourceCardProps
	extends Omit<React.ComponentPropsWithoutRef<"article">, "onSelect"> {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	title: string
	subtitle: string
	image?: string
	attributes: AttributeDefinition[]
	layout: "titleFirst" | "imageFirst"
	imageLayout: "logo" | "book"
	href: string
	tags: string[]
	selected?: boolean
	onSelect?: (selected: boolean) => void
}

export function ResourceCard({
	headingTag: H,
	children,
	className,
	title,
	subtitle,
	image,
	layout,
	imageLayout,
	href,
	tags,
	attributes,
	selected = false,
	onSelect,
	...props
}: ResourceCardProps) {
	const maxTags = maxTagsByLayout[layout]
	const visibleTags = tags.length > maxTags ? tags.slice(0, maxTags - 1) : tags
	const tagsInPopup = tags.length > maxTags ? tags.slice(maxTags - 1) : []
	const [popupOpen, setPopupOpen] = useState(false)
	const popupButtonRef = useRef(null)
	return (
		<article
			data-selected={onSelect ? selected : undefined}
			className={classNames(className, resourceCardStyle[layout])}
			{...props}
		>
			<header className={resourceCardHeaderStyle}>
				<div className={resourceCardImageContainerStyle}>
					{imageLayout === "book" && layout === "imageFirst" ? (
						<BookImageDecoration>
							<img src={image} className={resourceCardImageStyle} alt="" />
						</BookImageDecoration>
					) : (
						<img src={image} className={resourceCardImageStyle} alt="" />
					)}
				</div>
				<div className={sprinkles({ layout: "stack", gap: 4 })}>
					<a href={href} target="_blank" rel="noreferrer">
						<H className={resourceCardTitleStyle}>{title}</H>
					</a>
					<p className={resourceCardSubtitleStyle}>{subtitle}</p>
				</div>
				{onSelect && (
					<CardSelector
						checked={selected}
						onChange={(e) => onSelect(e.target.checked)}
					/>
				)}
			</header>
			<div className={resourceCardBodyStyle}>
				{attributes && (
					<div className={sprinkles({ layout: "row", gap: 12 })}>
						{attributes.map((attribute, index) => (
							<DiscreteAttribute colorize attribute={attribute} key={index} />
						))}
					</div>
				)}
				{children}
			</div>
			<footer className={resourceCardFooterStyle}>
				{visibleTags.map((tag) => (
					<Tag key={tag}>{formatFieldValue(tag)}</Tag>
				))}
				{tagsInPopup.length > 0 && (
					<Tag onClick={() => setPopupOpen(true)} ref={popupButtonRef}>
						{tagsInPopup.length}+
					</Tag>
				)}
				<InfoPopup
					isOpen={popupOpen}
					onDismiss={() => setPopupOpen(false)}
					targetRef={popupButtonRef}
				>
					<div className={sprinkles({ layout: "row", gap: 4 })}>
						{tagsInPopup.map((tag) => (
							<Tag key={tag}>{formatFieldValue(tag)}</Tag>
						))}
					</div>
				</InfoPopup>
			</footer>
		</article>
	)
}

const BookImageDecoration: React.FunctionComponent = ({ children }) => (
	<div className={resourceCardBookImageDecoration}>{children}</div>
)

const maxTagsByLayout = {
	titleFirst: 3,
	imageFirst: 2,
}
