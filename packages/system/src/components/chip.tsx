import classNames from "classnames"
import React from "react"
import { chipStyle } from "./chip.css"

export type ChipProps = React.ComponentPropsWithoutRef<"button">

export function Chip({ className, children, ...props }: ChipProps) {
	return (
		<button className={classNames(className, chipStyle)} {...props}>
			{children}
		</button>
	)
}

export type ChipLinkProps = React.ComponentPropsWithoutRef<"a">

export function ChipLink({
	className,
	children,
	href,
	...props
}: ChipLinkProps) {
	return (
		<a className={classNames(className, chipStyle)} href={href} {...props}>
			{children}
		</a>
	)
}
