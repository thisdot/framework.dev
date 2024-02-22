import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const VideoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function VideoIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M3.00012 4.5H1.50012V15C1.50012 15.825 2.17512 16.5 3.00012 16.5H13.5001V15H3.00012V4.5ZM15.0001 1.5H6.00012C5.17512 1.5 4.50012 2.175 4.50012 3V12C4.50012 12.825 5.17512 13.5 6.00012 13.5H15.0001C15.8251 13.5 16.5001 12.825 16.5001 12V3C16.5001 2.175 15.8251 1.5 15.0001 1.5ZM15.0001 12H6.00012V3H15.0001V12ZM9.00012 4.125V10.875L13.5001 7.5L9.00012 4.125Z" />
			</svg>
		)
	},
)
