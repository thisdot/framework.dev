import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const QwikIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function QwikIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				fill="none"
				width="57"
				height="58"
				version="1.1"
				viewBox="0 0 57 58"
				preserveAspectRatio="xMidYMid"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M31.8573 48.0308L36.7984 46.6214L49.0816 34.147L32.1333 45.7645L31.8573 48.0308Z"
					fill="url(#paint0_linear_2717_124337)"
				/>
				<path
					d="M50.3365 24.6079L49.9292 22.794L49.7684 22.0866L49.7255 22.1106L47.4886 12.9845C46.931 10.6812 45.1773 8.86577 42.8793 8.22159L38.6271 7.11957L39.6081 27.9709L34.4961 30.8325L32.0958 45.831L48.388 34.9581C50.6065 33.4511 51.687 30.7476 51.1089 28.1342L50.3369 24.608L50.3365 24.6079Z"
					fill="url(#paint1_linear_2717_124337)"
				/>
				<path
					d="M43.7306 21.3594L39.6389 7.40315L27.0899 3.79655C24.8553 3.17021 22.4633 3.74852 20.7749 5.34509L9.54856 17.5491L16.888 13.4702L26.9294 5.26848L38.4092 28.6848L42.3503 26.3628C44.1404 25.3658 44.1747 23.3046 43.7309 21.3599L43.7306 21.3594Z"
					fill="url(#paint2_linear_2717_124337)"
				/>
				<path
					d="M25.2028 20.5671L26.8792 5.3346L10.5102 16.9139C7.88306 18.3746 6.5992 21.4268 7.3615 24.3204L11.246 38.9139C11.8351 41.151 13.5775 42.9078 15.8158 43.5351L23.0605 45.5652L19.6444 23.4932L25.2028 20.5671Z"
					fill="url(#paint3_linear_2717_124337)"
				/>
				<path
					d="M32.1362 45.755L19.6577 23.3908L16.854 24.9229C14.5598 26.1668 13.7354 29.0443 15.0114 31.3067L19.4452 44.5342L31.3589 47.891L32.1358 45.7549L32.1362 45.755Z"
					fill="url(#paint4_linear_2717_124337)"
				/>
				<path
					d="M19.4691 44.5379L32.2278 45.853L38.0572 56.3859L19.4691 44.5379Z"
					fill="url(#paint5_linear_2717_124337)"
				/>
				<path
					d="M32.0902 45.8486L36.8441 46.4955L38.6583 56.0343C38.7441 56.4308 38.1871 56.6293 37.983 56.2709L32.0902 45.8486Z"
					fill="url(#paint6_linear_2717_124337)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_2717_124337"
						x1="36.7663"
						y1="40.0123"
						x2="43.8669"
						y2="42.0023"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#4340C4" />
						<stop offset="0.12" stopColor="#4642C8" />
						<stop offset="1" stopColor="#594EE4" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_2717_124337"
						x1="40.4351"
						y1="27.7532"
						x2="44.3001"
						y2="28.8363"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#4340C4" />
						<stop offset="0.74" stopColor="#534ADB" />
						<stop offset="1" stopColor="#594EE4" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_2717_124337"
						x1="11.4544"
						y1="10.4316"
						x2="45.0957"
						y2="19.8597"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#4340C4" />
						<stop offset="0.23" stopColor="#4340C4" />
						<stop offset="0.6" stopColor="#4F48D5" />
						<stop offset="1" stopColor="#594EE4" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_2717_124337"
						x1="14.8381"
						y1="22.5121"
						x2="20.9554"
						y2="24.2266"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#0080FF" />
						<stop offset="1" stopColor="#00B9FF" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_2717_124337"
						x1="13.3303"
						y1="32.2424"
						x2="34.2758"
						y2="38.1126"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#0080FF" />
						<stop offset="0.17" stopColor="#008BFF" />
						<stop offset="0.47" stopColor="#00A7FF" />
						<stop offset="0.63" stopColor="#00B9FF" />
						<stop offset="1" stopColor="#00B9FF" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_2717_124337"
						x1="18.8567"
						y1="46.7222"
						x2="39.1679"
						y2="52.4145"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00B9FF" />
						<stop offset="0.3" stopColor="#0080FF" />
						<stop offset="0.6" stopColor="#2D67F1" />
						<stop offset="0.86" stopColor="#4D55E8" />
						<stop offset="1" stopColor="#594EE4" />
					</linearGradient>
					<linearGradient
						id="paint6_linear_2717_124337"
						x1="31.4413"
						y1="49.8585"
						x2="39.6769"
						y2="52.1666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#4340C4" />
						<stop offset="0.12" stopColor="#4642C8" />
						<stop offset="1" stopColor="#594EE4" />
					</linearGradient>
				</defs>
			</svg>
		)
	}
)
