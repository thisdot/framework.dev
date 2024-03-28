import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function CloseIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 24 24"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
			</svg>
		)
	},
)
