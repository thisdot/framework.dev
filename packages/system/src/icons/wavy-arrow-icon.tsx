import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const WavyArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function WavyArrowIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="144"
				height="42"
				viewBox="0 0 144 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M1.2482 15.6643C0.713199 15.5273 0.168369 15.8498 0.0312915 16.3848C-0.105786 16.9198 0.216796 17.4647 0.751799 17.6017L1.2482 15.6643ZM73 13.748L72.0109 13.8951L73 13.748ZM136.967 41.0939C137.434 41.3884 138.051 41.2485 138.346 40.7814L143.146 33.1685C143.441 32.7014 143.301 32.0838 142.834 31.7893C142.367 31.4947 141.749 31.6346 141.455 32.1018L137.188 38.8687L130.421 34.6017C129.953 34.3071 129.336 34.447 129.041 34.9141C128.747 35.3813 128.887 35.9988 129.354 36.2934L136.967 41.0939ZM0.751799 17.6017C17.6335 21.9272 30.3354 21.5948 39.9839 19.1917C49.6363 16.7876 56.1606 12.3288 60.7049 8.51935C62.9185 6.66377 64.7952 4.83965 66.1246 3.68142C66.8239 3.07228 67.3936 2.62425 67.8725 2.33729C68.3636 2.043 68.6409 1.99127 68.7825 2.00108C68.8645 2.00675 69.0184 2.0363 69.2595 2.35239C69.5213 2.69542 69.8136 3.28988 70.1226 4.25733C70.7383 6.18464 71.3226 9.26459 72.0109 13.8951L73.9891 13.601C73.3024 8.98148 72.6992 5.75051 72.0278 3.64873C71.6933 2.60163 71.3171 1.75201 70.8496 1.13923C70.3615 0.499522 69.7254 0.06156 68.9206 0.00585067C68.1755 -0.0457282 67.4694 0.247286 66.8445 0.621709C66.2075 1.00345 65.5287 1.5481 64.8109 2.17343C63.3064 3.48415 61.6753 5.09617 59.4201 6.98664C55.0269 10.6693 48.77 14.9422 39.5005 17.251C30.2271 19.5606 17.8665 19.9222 1.2482 15.6643L0.751799 17.6017ZM72.0109 13.8951C73.2016 21.9054 74.8946 27.4425 77.035 31.0621C79.2005 34.7242 81.8732 36.492 84.9468 36.762C87.9289 37.024 91.0877 35.8522 94.2272 34.1318C97.3823 32.4028 100.679 30.0256 103.943 27.7037C107.234 25.3628 110.5 23.072 113.677 21.4241C116.862 19.772 119.837 18.8328 122.552 19.0628C125.205 19.2876 127.768 20.6435 130.143 23.9328C132.544 27.2573 134.725 32.526 136.525 40.469L138.475 40.027C136.65 31.97 134.393 26.4014 131.765 22.7619C129.111 19.0873 126.054 17.3523 122.721 17.07C119.449 16.7929 116.07 17.9302 112.756 19.6487C109.435 21.3715 106.058 23.7455 102.784 26.0739C99.4841 28.4214 96.2952 30.718 93.2661 32.3779C90.2215 34.0463 87.4977 34.9784 85.1218 34.7697C82.8375 34.569 80.6768 33.2914 78.7565 30.0441C76.8112 26.7544 75.166 21.5179 73.9891 13.601L72.0109 13.8951Z"
					fill="black"
				/>
			</svg>
		)
	}
)
