import classNames from 'classnames';
import React from 'react';
import { Counter } from './counter';
import {
	navItemLabelStyle,
	navItemStyle,
	navItemHiddenUntilFocus,
} from './nav-item.css';

export interface NavItemProps extends React.ComponentPropsWithoutRef<'a'> {
	count?: number;
	hiddenUntilFocus?: boolean;
}

export function NavItem({
	children,
	className,
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
			<div className={navItemLabelStyle}>{children}</div>
			{!!count && <Counter size="small">{count}</Counter>}
		</a>
	);
}
