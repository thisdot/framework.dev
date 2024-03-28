import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const AngularIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function AngularIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 28.512 30.625"
				width="28.512"
				height="30.625"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M 14.256 0 L 0 5.084 L 2.174 23.933 L 14.256 30.625 L 26.338 23.933 L 28.512 5.084 L 14.256 0 Z"
					fill="#DD0031"
				/>
				<path
					d="M 14.256 0 L 14.256 3.399 L 14.256 3.384 L 14.256 30.625 L 26.337 23.933 L 28.512 5.084 L 14.256 0 Z"
					fill="#C3002F"
				/>
				<path
					d="M 14.257 3.384 L 5.345 23.367 L 8.668 23.367 L 10.459 18.896 L 18.024 18.896 L 19.815 23.367 L 23.138 23.367 L 14.257 3.384 Z M 16.86 16.139 L 11.654 16.139 L 14.257 9.877 L 16.86 16.139 Z"
					fill="white"
				/>
			</svg>
		)
	},
)
