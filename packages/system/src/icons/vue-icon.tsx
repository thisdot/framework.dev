import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const VueIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function VueIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 30.625 26.414"
				width="30.625"
				height="26.414"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M 24.5 0 L 30.625 0 L 15.312 26.414 L 0 0 L 11.714 0 L 15.312 6.125 L 18.834 0 L 24.5 0 Z"
					fill="#41B883"
				/>
				<path
					d="M 0 0 L 15.312 26.414 L 30.625 0 L 24.5 0 L 15.312 15.848 L 6.048 0 L 0 0 Z"
					fill="#41B883"
				/>
				<path
					d="M 6.047 0 L 15.311 15.925 L 24.498 0 L 18.833 0 L 15.311 6.125 L 11.712 0 L 6.047 0 Z"
					fill="#35495E"
				/>
			</svg>
		)
	}
)
