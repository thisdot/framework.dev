import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const ResetIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function ResetIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M5.25024 8.25V9.75H12.7502V8.25H5.25024ZM9.00024 1.5C4.86024 1.5 1.50024 4.86 1.50024 9C1.50024 13.14 4.86024 16.5 9.00024 16.5C13.1402 16.5 16.5002 13.14 16.5002 9C16.5002 4.86 13.1402 1.5 9.00024 1.5ZM9.00024 15C5.69274 15 3.00024 12.3075 3.00024 9C3.00024 5.6925 5.69274 3 9.00024 3C12.3077 3 15.0002 5.6925 15.0002 9C15.0002 12.3075 12.3077 15 9.00024 15Z" />
			</svg>
		)
	}
)
