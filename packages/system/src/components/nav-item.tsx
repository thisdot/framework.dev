import classNames from 'classnames'
import React from 'react'
import { IconProps } from '../icons/shared-icon-types'
import { Counter } from './counter'
import {
	navItemIconStyle,
	navItemLabelStyle,
	navItemStyle,
	navItemHiddenUntilFocus,
} from './nav-item.css'

export interface NavItemProps extends React.ComponentPropsWithoutRef<'a'> {
	icon?: React.ComponentType<IconProps>
	count?: number
	hiddenUntilFocus?: boolean
}

export function NavItem({
	children,
	className,
	icon: Icon,
	count,
	hiddenUntilFocus,
	...props
}: NavItemProps) {
	return (
		<a
			className={classNames(
				className,
				navItemStyle,
				hiddenUntilFocus && navItemHiddenUntilFocus,
			)}
			{...props}
		>
			{Icon && (
				<div className={navItemIconStyle}>
					<Icon />
				</div>
			)}
			<div className={navItemLabelStyle}>{children}</div>
			{!!count && <Counter size="small">{count}</Counter>}
		</a>
	)
}
