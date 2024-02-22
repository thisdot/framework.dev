import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const LibraryCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function LibraryCardIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 340 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<rect x="0.5" y="0.5" width="339" height="295" rx="9.5" fill="white" />
				<rect x="16" y="16" width="40" height="40" rx="8" fill="#C6B064" />
				<rect
					x="16.5"
					y="16.5"
					width="39"
					height="39"
					rx="7.5"
					stroke="black"
					strokeOpacity="0.04"
				/>
				<rect x="68" y="20" width="154" height="14" rx="7" fill="#C4C7C8" />
				<rect x="68" y="41" width="54" height="11" rx="5.5" fill="#E6E6E6" />
				<path
					d="M304 22H302V36C302 37.1 302.9 38 304 38H318V36H304V22ZM320 18H308C306.9 18 306 18.9 306 20V32C306 33.1 306.9 34 308 34H320C321.1 34 322 33.1 322 32V20C322 18.9 321.1 18 320 18ZM320 32H308V20H320V32ZM313 30H315V27H318V25H315V22H313V25H310V27H313V30Z"
					fill="#00639D"
				/>
				<rect
					x="0.5"
					y="0.5"
					width="339"
					height="295"
					rx="9.5"
					stroke="#70797C"
				/>
			</svg>
		)
	},
)
