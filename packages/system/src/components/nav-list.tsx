import classNames from "classnames"
import React from "react"
import { navListItemStyle, navListStyle } from "./nav-list.css"

export interface NavListProps extends React.ComponentPropsWithoutRef<"ul"> {}

export function NavList({ children, className, ...props }: NavListProps) {
	return (
		<ul className={classNames(className, navListStyle)} {...props}>
			{children}
		</ul>
	)
}

export interface NavListItemProps
	extends React.ComponentPropsWithoutRef<"li"> {}

export function NavListItem({
	children,
	className,
	...props
}: NavListItemProps) {
	return (
		<li className={classNames(className, navListItemStyle)} {...props}>
			{children}
		</li>
	)
}
