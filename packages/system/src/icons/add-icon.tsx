import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const AddIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function AddIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M14.2502 9.75H9.75024V14.25H8.25024V9.75H3.75024V8.25H8.25024V3.75H9.75024V8.25H14.2502V9.75Z" />
			</svg>
		)
	},
)
