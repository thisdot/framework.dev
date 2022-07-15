import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const ExternalLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function ExternalLinkIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.332 3.49992C16.332 2.85559 16.8544 2.33325 17.4987 2.33325H24.4987C25.143 2.33325 25.6654 2.85559 25.6654 3.49992C25.6654 4.14425 25.143 4.66658 24.4987 4.66658H17.4987C16.8544 4.66658 16.332 4.14425 16.332 3.49992Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24.4987 2.33325C25.143 2.33325 25.6654 2.85559 25.6654 3.49992V10.4999C25.6654 11.1443 25.143 11.6666 24.4987 11.6666C23.8544 11.6666 23.332 11.1443 23.332 10.4999V3.49992C23.332 2.85559 23.8544 2.33325 24.4987 2.33325Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24.1583 3.84171C24.6139 4.29732 24.6139 5.03601 24.1583 5.49162L15.9916 13.6583C15.536 14.1139 14.7973 14.1139 14.3417 13.6583C13.8861 13.2027 13.8861 12.464 14.3417 12.0084L22.5084 3.84171C22.964 3.3861 23.7027 3.3861 24.1583 3.84171Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.66602 5.83317C4.66602 5.18884 5.18835 4.6665 5.83268 4.6665H12.8327C13.477 4.6665 13.9993 5.18884 13.9993 5.83317C13.9993 6.4775 13.477 6.99984 12.8327 6.99984H6.99935V20.9998H20.9993V15.1665C20.9993 14.5222 21.5217 13.9998 22.166 13.9998C22.8103 13.9998 23.3327 14.5222 23.3327 15.1665V22.1665C23.3327 22.8108 22.8103 23.3332 22.166 23.3332H5.83268C5.18835 23.3332 4.66602 22.8108 4.66602 22.1665V5.83317Z"
					fill="currentColor"
				/>
			</svg>
		)
	}
)
