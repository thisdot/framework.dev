import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const FrameworkDevIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function FrameworkDevIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 6 16"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path
					d="M5.86375 15.3637V13.5076C4.50638 13.5076 4.23147 12.9781 4.23147 11.855V10.156C4.23147 9.25987 3.85347 8.45688 2.19257 8.11358V7.88083C3.85347 7.53752 4.23147 6.73453 4.23147 5.84426V4.14518C4.23147 3.01635 4.50638 2.48684 5.86375 2.48684V0.636475C3.54993 0.636475 1.89475 1.02633 1.89475 3.89498V5.18092C1.89475 6.37377 1.45375 6.88 0.136475 6.88V9.1144C1.45375 9.1144 1.89475 9.62064 1.89475 10.8135V12.1052C1.89475 14.9739 3.54993 15.3637 5.86375 15.3637Z"
					fill="white"
				/>
			</svg>
		)
	}
)
