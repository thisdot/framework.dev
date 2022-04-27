import classNames from "classnames"
import React from "react"
import {
	linkCardStyle,
	linkCardIndicatorIconStyle,
	linkCardIconContainerStyle,
	linkCardIconStyle,
	linkCardTitleStyle,
} from "./link-card.css"
import { ExternalLinkIcon } from "../../icons/external-link"

export interface LinkCardProps extends React.ComponentPropsWithoutRef<"a"> {
	title: string
	href: string
	icon?: string
	backgroundColor?: string
}

export function LinkCard({
	className,
	title,
	href,
	icon,
	backgroundColor,
	...props
}: LinkCardProps) {
	return (
		<a
			className={classNames(className, linkCardStyle)}
			href={href}
			{...props}
			style={
				{ "--link-card-background": backgroundColor } as React.CSSProperties
			}
		>
			{icon && (
				<span className={linkCardIconContainerStyle}>
					<img className={linkCardIconStyle} src={icon} alt={title} />
				</span>
			)}
			<span className={linkCardTitleStyle}>{title}</span>
			<ExternalLinkIcon className={linkCardIndicatorIconStyle} />
		</a>
	)
}
