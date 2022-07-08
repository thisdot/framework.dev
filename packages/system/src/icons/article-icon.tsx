import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const ArticleIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function ArticleIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M14.2501 14.25V3.75H3.75012V14.25H14.2501ZM3.75012 2.25H14.2501C15.0751 2.25 15.7501 2.925 15.7501 3.75V14.25C15.7501 15.075 15.0751 15.75 14.2501 15.75H3.75012C2.92512 15.75 2.25012 15.075 2.25012 14.25V3.75C2.25012 2.925 2.92512 2.25 3.75012 2.25ZM5.25012 12.75H10.5001V11.25H5.25012V12.75ZM5.25012 9.75H12.7501V8.25H5.25012V9.75ZM5.25012 6.75H12.7501V5.25H5.25012V6.75Z" />
			</svg>
		)
	}
)
