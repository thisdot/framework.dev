import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const FreeIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function FreeIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M9.37517 5.175C10.7102 5.175 11.2052 5.8125 11.2502 6.75H12.9077C12.8552 5.46 12.0677 4.275 10.5002 3.8925V2.25H8.25017V3.87C7.95767 3.93 7.68767 4.0275 7.42517 4.14L8.55767 5.2725C8.79767 5.2125 9.07517 5.175 9.37517 5.175ZM4.10267 2.94L3.04517 3.9975L5.62517 6.5775C5.62517 8.1375 6.79517 8.9925 8.55767 9.51L11.1902 12.1425C10.9352 12.51 10.4027 12.825 9.37517 12.825C7.83017 12.825 7.22267 12.135 7.14017 11.25H5.49017C5.58017 12.8925 6.81017 13.815 8.25017 14.1225V15.75H10.5002V14.1375C11.2202 14.0025 11.8727 13.725 12.3452 13.2975L14.0102 14.9625L15.0677 13.905L4.10267 2.94Z" />
			</svg>
		)
	},
)
