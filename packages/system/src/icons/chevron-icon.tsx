import classNames from 'classnames'
import React from 'react'
import { flipHorizontallyStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

type ChevronIconProps = IconProps & { flipped?: boolean }

export const ChevronIcon = React.forwardRef<SVGSVGElement, ChevronIconProps>(
	function ChevronIcon({ className, flipped = false, ...props }, ref) {
		return (
			<svg
				className={classNames(className, flipped && flipHorizontallyStyle)}
				fill="currentColor"
				ref={ref}
				viewBox="0 0 6 10"
				{...props}
			>
				<path
					d="M5.5575 8.4425L2.1225 5L5.5575 1.5575L4.5 0.5L0 5L4.5 9.5L5.5575 8.4425Z"
					fill="#191C1D"
				/>
			</svg>
		)
	}
)
