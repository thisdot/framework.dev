import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function HomeIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 24 24"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
			</svg>
		)
	},
)
