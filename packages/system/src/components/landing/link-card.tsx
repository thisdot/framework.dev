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
import { IconProps } from "../../icons/shared-icon-types"

export interface LinkCardProps extends React.ComponentPropsWithoutRef<"a"> {
	title: string
	href: string
	bigSize?: boolean
	Icon?: (props: IconProps) => JSX.Element
	RawIcon?: (props: IconProps) => JSX.Element
	backgroundColor?: string
	color?: string
}

export function LinkCard({
	className,
	title,
	href,
	Icon,
	RawIcon,
	bigSize,
	backgroundColor,
	color = "white",
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
				{
					"--link-card-background": backgroundColor,
					"--link-card-color-theme": color,
				} as React.CSSProperties
			}
		>
			{Icon && (
				<span className={linkCardIconContainerStyle}>
					<Icon size="full" className={linkCardIconStyle} />
				</span>
			)}

			{RawIcon && (
				<span className={linkCardRawIconContainerStyle}>
					<RawIcon size="full" />
				</span>
			)}

			<span className={linkCardTitleStyle}>{title}</span>
			<ExternalLinkIcon className={linkCardIndicatorIconStyle} />
		</a>
	)
}
