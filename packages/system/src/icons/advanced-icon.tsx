import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const AdvancedIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function AdvancedIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M1.50037 4.49997L1.50037 5.99997L16.5004 5.99997V4.49997L1.50037 4.49997Z" />
				<path d="M1.50037 8.24997L1.50037 9.74997L16.5004 9.74997L16.5004 8.24997L1.50037 8.24997Z" />
				<path d="M1.50037 12L1.50037 13.5L16.5004 13.5L16.5004 12L1.50037 12Z" />
			</svg>
		)
	},
)
