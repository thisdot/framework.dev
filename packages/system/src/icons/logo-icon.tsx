import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const LogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function LogoIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="56"
				height="56"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="#191C1D" />
				<rect
					x="0.5"
					y="0.5"
					width="55"
					height="55"
					rx="27.5"
					fill="url(#paint0_linear_2206_3413)"
					fillOpacity="0.25"
				/>
				<path
					d="M32.454 39.454V36.5666C30.3426 36.5666 29.9149 35.7429 29.9149 33.996V31.353C29.9149 29.9591 29.3269 28.71 26.7433 28.176V27.8139C29.3269 27.2799 29.9149 26.0308 29.9149 24.6459V22.0029C29.9149 20.2469 30.3426 19.4233 32.454 19.4233V16.5449C28.8547 16.5449 26.28 17.1514 26.28 21.6137V23.6141C26.28 25.4696 25.594 26.2571 23.5449 26.2571V29.7328C25.594 29.7328 26.28 30.5203 26.28 32.3758V34.3852C26.28 38.8476 28.8547 39.454 32.454 39.454Z"
					fill="white"
				/>
				<rect
					x="0.5"
					y="0.5"
					width="55"
					height="55"
					rx="27.5"
					stroke="#747778"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_2206_3413"
						x1="0"
						y1="0"
						x2="56"
						y2="56"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		)
	}
)
