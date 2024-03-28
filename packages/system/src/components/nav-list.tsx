import classNames from 'classnames'
import React from 'react'
import { navListItemStyle, navListStyle } from './nav-list.css'

export type NavListProps = React.ComponentPropsWithoutRef<'ul'>

export function NavList({ children, className, ...props }: NavListProps) {
	return (
		<ul className={classNames(className, navListStyle)} {...props}>
			{children}
		</ul>
	)
}

export type NavListItemProps = React.ComponentPropsWithoutRef<'li'>

export function NavListItem({
	children,
	className,
	...props
}: NavListItemProps) {
	const id = React.useId()
	return (
		<li key={id} className={classNames(className, navListItemStyle)} {...props}>
			{children}
		</li>
	)
}
