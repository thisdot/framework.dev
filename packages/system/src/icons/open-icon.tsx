import classNames from 'classnames';
import React from 'react';
import { iconStyle } from './icon.css';
import { type IconProps } from './shared-icon-types';

export const OpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function OpenIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 24 24"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" />
			</svg>
		);
	},
);
