import classNames from "classnames"
import React from "react"
import {
	linkCardStyle,
	linkCardIndicatorIconStyle,
	linkCardIconContainerStyle,
	linkCardIconStyle,
	linkCardTitleStyle,
	linkCardRawIconContainerStyle,
} from "./link-card.css"
import { ExternalLinkIcon } from "../../icons/external-link"

export interface LinkCardProps extends React.ComponentPropsWithoutRef<"a"> {
	title: string
	href: string
	bigSize?: boolean
	icon?: string
	rawIcon?: string
	backgroundColor?: string
	color?: string
}

export function LinkCard({
	className,
	title,
	href,
	icon,
	rawIcon,
	bigSize,
	backgroundColor,
	color = 'white',
	...props
}: LinkCardProps) {
	return (
		<a
			className={classNames(className, linkCardStyle, { bigSize })}
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			{...props}
			style={
				{ "--link-card-background": backgroundColor, "--link-card-color-theme": color } as React.CSSProperties
			}
		>
			{icon && (
				<span className={linkCardIconContainerStyle}>
					<img className={linkCardIconStyle} src={icon} alt={title} />
				</span>
			)}

			{rawIcon && (
				<span className={linkCardRawIconContainerStyle}>
					<img src={rawIcon} alt={title} />
				</span>
			)}

			<span className={linkCardTitleStyle}>{title}</span>
			<ExternalLinkIcon className={linkCardIndicatorIconStyle} />
		</a>
	)
}
