import classNames from "classnames"
import React from "react"
import {
	comparisonBoxStyle,
	comparisonBoxHeadingStyle,
	comparisonBoxHeadingSoftStyle,
	comparisonBoxWhichLibsStyle,
	comparisonBoxImageStyle,
} from "./comparison-box.css"
import { Chip } from "../chip"
import { serializeFieldValue } from "../../util/string-utils"

export interface ComparisonBoxProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraryTags: string[]
}

export function ComparisonBox({
	children,
	className,
	libraryTags,
	...props
}: ComparisonBoxProps) {
	return (
		<div className={classNames(className, comparisonBoxStyle)} {...props}>
			<h2 className={comparisonBoxHeadingStyle}>
				Compare and select libraries{" "}
				<span className={comparisonBoxHeadingSoftStyle}>
					based on your needs
				</span>
			</h2>
			<p className={comparisonBoxWhichLibsStyle}>
				What libraries do you want to compare?
			</p>
			<div>
				{libraryTags.slice(0, 6).map((tag) => (
					<Chip
						as="a"
						style={{ margin: "0 8px 8px 0" }}
						key={tag}
						href={`/categories/libraries/tags/${serializeFieldValue(tag)}`}
					>
						{tag}
					</Chip>
				))}
			</div>
			<svg
				viewBox="0 0 316 148"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={comparisonBoxImageStyle}
			>
				<path d="M0 0H144.97V37.24H0V0Z" fill="#F6FDFF" />
				<rect
					x="15.96"
					y="15.2949"
					width="47.879"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="15.96"
					y="15.2949"
					width="47.879"
					height="6.65"
					rx="3.325"
					fill="url(#paint0_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="113.049"
					y="15.2949"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M119.533 17.125L123.024 20.6163L126.516 17.125L123.024 17.125L119.533 17.125Z"
					fill="#70797C"
				/>
				<path
					d="M0 0V-0.5H-0.5V0H0ZM144.97 0H145.47V-0.5H144.97V0ZM144.97 37.24V37.74H145.47V37.24H144.97ZM0 37.24H-0.5V37.74H0V37.24ZM0 0.5H144.97V-0.5H0V0.5ZM144.47 0V37.24H145.47V0H144.47ZM144.97 36.74H0V37.74H144.97V36.74ZM0.5 37.24V0H-0.5V37.24H0.5Z"
					fill="#A4ADB0"
				/>
				<rect x="0.25" y="37.4902" width="144.47" height="36.74" fill="white" />
				<rect
					x="15.96"
					y="47.8809"
					width="15.96"
					height="15.96"
					rx="3.99"
					fill="#E89924"
				/>
				<rect
					x="16.2925"
					y="48.2134"
					width="15.295"
					height="15.295"
					rx="3.6575"
					stroke="black"
					strokeOpacity="0.04"
					strokeWidth="0.665"
				/>
				<rect
					x="39.9004"
					y="52.5352"
					width="49.8743"
					height="6.65"
					rx="3.325"
					fill="#8E9192"
				/>
				<rect
					x="39.9004"
					y="52.5352"
					width="49.8743"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="39.9004"
					y="52.5352"
					width="49.8743"
					height="6.65"
					rx="3.325"
					fill="url(#paint1_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="95.0947"
					y="52.5352"
					width="39.235"
					height="6.65"
					rx="3.325"
					fill="#8E9192"
				/>
				<rect
					x="95.0947"
					y="52.5352"
					width="39.235"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="95.0947"
					y="52.5352"
					width="39.235"
					height="6.65"
					rx="3.325"
					fill="url(#paint2_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="139.649"
					y="52.5352"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<rect
					x="0.25"
					y="37.4902"
					width="144.47"
					height="36.74"
					stroke="#A4ADB0"
					strokeWidth="0.5"
				/>
				<path d="M0 74.4805H144.97V111.72H0V74.4805Z" fill="white" />
				<rect
					x="15.96"
					y="85.1211"
					width="15.96"
					height="15.96"
					rx="7.98"
					fill="#81D000"
				/>
				<rect
					x="16.2925"
					y="85.4536"
					width="15.295"
					height="15.295"
					rx="7.6475"
					stroke="black"
					strokeOpacity="0.04"
					strokeWidth="0.665"
				/>
				<rect
					x="39.9004"
					y="89.7754"
					width="60.514"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="39.9004"
					y="89.7754"
					width="60.514"
					height="6.65"
					rx="3.325"
					fill="url(#paint3_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="139.649"
					y="89.7754"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M0 74.4805V73.9805H-0.5V74.4805H0ZM144.97 74.4805H145.47V73.9805H144.97V74.4805ZM144.97 111.72V112.22H145.47V111.72H144.97ZM0 111.72H-0.5V112.22H0V111.72ZM0 74.9805H144.97V73.9805H0V74.9805ZM144.47 74.4805V111.72H145.47V74.4805H144.47ZM144.97 111.22H0V112.22H144.97V111.22ZM0.5 111.72V74.4805H-0.5V111.72H0.5Z"
					fill="#A4ADB0"
				/>
				<path d="M0 111.721H144.97V148.961H0V111.721Z" fill="white" />
				<rect
					x="15.96"
					y="122.361"
					width="15.96"
					height="15.96"
					rx="3.99"
					fill="#58C9E1"
				/>
				<rect
					x="16.2925"
					y="122.694"
					width="15.295"
					height="15.295"
					rx="3.6575"
					stroke="black"
					strokeOpacity="0.04"
					strokeWidth="0.665"
				/>
				<rect
					x="39.9004"
					y="127.016"
					width="45.219"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="39.9004"
					y="127.016"
					width="45.219"
					height="6.65"
					rx="3.325"
					fill="url(#paint4_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="139.649"
					y="127.016"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M0 111.721V111.221H-0.5V111.721H0ZM144.97 111.721H145.47V111.221H144.97V111.721ZM144.97 148.961V149.461H145.47V148.961H144.97ZM0 148.961H-0.5V149.461H0V148.961ZM0 112.221H144.97V111.221H0V112.221ZM144.47 111.721V148.961H145.47V111.721H144.47ZM144.97 148.461H0V149.461H144.97V148.461ZM0.5 148.961V111.721H-0.5V148.961H0.5Z"
					fill="#A4ADB0"
				/>
				<path d="M144.97 0H224.105V37.24H144.97V0Z" fill="#F6FDFF" />
				<rect
					x="160.93"
					y="15.2949"
					width="24.6043"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="160.93"
					y="15.2949"
					width="24.6043"
					height="6.65"
					rx="3.325"
					fill="url(#paint5_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="192.184"
					y="15.2949"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M202.159 14.1328L205.65 17.6241L198.668 17.6241L202.159 14.1328ZM202.159 23.1103L198.668 19.6191H202.159L205.65 19.6191L202.159 23.1103Z"
					fill="#A4ADB0"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M202.159 14.1328L205.65 17.6241L198.668 17.6241L202.159 14.1328ZM202.159 23.1103L198.668 19.6191H202.159L205.65 19.6191L202.159 23.1103Z"
					fill="url(#paint6_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<path
					d="M144.97 0V-0.5H144.47V0H144.97ZM224.105 0H224.605V-0.5H224.105V0ZM224.105 37.24V37.74H224.605V37.24H224.105ZM144.97 37.24H144.47V37.74H144.97V37.24ZM144.97 0.5H224.105V-0.5H144.97V0.5ZM223.605 0V37.24H224.605V0H223.605ZM224.105 36.74H144.97V37.74H224.105V36.74ZM145.47 37.24V0H144.47V37.24H145.47Z"
					fill="#A4ADB0"
				/>
				<path
					d="M144.97 37.2402H224.105V74.4802H144.97V37.2402Z"
					fill="white"
				/>
				<rect
					x="160.93"
					y="52.5352"
					width="40.564"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="160.93"
					y="52.5352"
					width="40.564"
					height="6.65"
					rx="3.325"
					fill="url(#paint7_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="208.144"
					y="52.5352"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M144.97 37.2402V36.7402H144.47V37.2402H144.97ZM224.105 37.2402H224.605V36.7402H224.105V37.2402ZM224.105 74.4802V74.9802H224.605V74.4802H224.105ZM144.97 74.4802H144.47V74.9802H144.97V74.4802ZM144.97 37.7402H224.105V36.7402H144.97V37.7402ZM223.605 37.2402V74.4802H224.605V37.2402H223.605ZM224.105 73.9802H144.97V74.9802H224.105V73.9802ZM145.47 74.4802V37.2402H144.47V74.4802H145.47Z"
					fill="#A4ADB0"
				/>
				<path d="M144.97 74.4805H224.105V111.72H144.97V74.4805Z" fill="white" />
				<rect
					x="160.93"
					y="89.7754"
					width="25.269"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="160.93"
					y="89.7754"
					width="25.269"
					height="6.65"
					rx="3.325"
					fill="url(#paint8_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="208.144"
					y="89.7754"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M144.97 74.4805V73.9805H144.47V74.4805H144.97ZM224.105 74.4805H224.605V73.9805H224.105V74.4805ZM224.105 111.72V112.22H224.605V111.72H224.105ZM144.97 111.72H144.47V112.22H144.97V111.72ZM144.97 74.9805H224.105V73.9805H144.97V74.9805ZM223.605 74.4805V111.72H224.605V74.4805H223.605ZM224.105 111.22H144.97V112.22H224.105V111.22ZM145.47 111.72V74.4805H144.47V111.72H145.47Z"
					fill="#A4ADB0"
				/>
				<path
					d="M144.97 111.721H224.105V148.961H144.97V111.721Z"
					fill="white"
				/>
				<rect
					x="160.93"
					y="127.016"
					width="47.214"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="160.93"
					y="127.016"
					width="47.214"
					height="6.65"
					rx="3.325"
					fill="url(#paint9_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="208.144"
					y="127.016"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M144.97 111.721V111.221H144.47V111.721H144.97ZM224.105 111.721H224.605V111.221H224.105V111.721ZM224.105 148.961V149.461H224.605V148.961H224.105ZM144.97 148.961H144.47V149.461H144.97V148.961ZM144.97 112.221H224.105V111.221H144.97V112.221ZM223.605 111.721V148.961H224.605V111.721H223.605ZM224.105 148.461H144.97V149.461H224.105V148.461ZM145.47 148.961V111.721H144.47V148.961H145.47Z"
					fill="#A4ADB0"
				/>
				<path d="M224.105 0H321.195V37.24H224.105V0Z" fill="#F6FDFF" />
				<rect
					x="240.065"
					y="15.2949"
					width="33.914"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="240.065"
					y="15.2949"
					width="33.914"
					height="6.65"
					rx="3.325"
					fill="url(#paint10_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="289.274"
					y="15.2949"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M299.25 14.1328L302.741 17.6241L295.759 17.6241L299.25 14.1328ZM299.25 23.1103L295.759 19.6191H299.25L302.741 19.6191L299.25 23.1103Z"
					fill="#A4ADB0"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M299.25 14.1328L302.741 17.6241L295.759 17.6241L299.25 14.1328ZM299.25 23.1103L295.759 19.6191H299.25L302.741 19.6191L299.25 23.1103Z"
					fill="url(#paint11_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<path
					d="M224.105 0V-0.5H223.605V0H224.105ZM321.195 0H321.695V-0.5H321.195V0ZM321.195 37.24V37.74H321.695V37.24H321.195ZM224.105 37.24H223.605V37.74H224.105V37.24ZM224.105 0.5H321.195V-0.5H224.105V0.5ZM320.695 0V37.24H321.695V0H320.695ZM321.195 36.74H224.105V37.74H321.195V36.74ZM224.605 37.24V0H223.605V37.24H224.605Z"
					fill="#A4ADB0"
				/>
				<path
					d="M224.105 37.2402H321.195V74.4802H224.105V37.2402Z"
					fill="white"
				/>
				<path
					d="M246.05 58.489L249.132 60.3493L248.314 56.8431L251.038 54.484L247.451 54.1798L246.05 50.873L244.649 54.1798L241.062 54.484L243.786 56.8431L242.968 60.3493L246.05 58.489Z"
					fill="#70797C"
				/>
				<rect
					x="256.025"
					y="52.5352"
					width="36.574"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="256.025"
					y="52.5352"
					width="36.574"
					height="6.65"
					rx="3.325"
					fill="url(#paint12_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="305.234"
					y="52.5352"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M224.105 37.2402V36.7402H223.605V37.2402H224.105ZM321.195 37.2402H321.695V36.7402H321.195V37.2402ZM321.195 74.4802V74.9802H321.695V74.4802H321.195ZM224.105 74.4802H223.605V74.9802H224.105V74.4802ZM224.105 37.7402H321.195V36.7402H224.105V37.7402ZM320.695 37.2402V74.4802H321.695V37.2402H320.695ZM321.195 73.9802H224.105V74.9802H321.195V73.9802ZM224.605 74.4802V37.2402H223.605V74.4802H224.605Z"
					fill="#A4ADB0"
				/>
				<path
					d="M224.105 74.4805H321.195V111.72H224.105V74.4805Z"
					fill="white"
				/>
				<path
					d="M246.05 95.7292L249.132 97.5895L248.314 94.0833L251.038 91.7242L247.451 91.42L246.05 88.1133L244.649 91.42L241.062 91.7242L243.786 94.0833L242.968 97.5895L246.05 95.7292Z"
					fill="#70797C"
				/>
				<rect
					x="256.025"
					y="89.7754"
					width="29.924"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="256.025"
					y="89.7754"
					width="29.924"
					height="6.65"
					rx="3.325"
					fill="url(#paint13_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="305.234"
					y="89.7754"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M224.105 74.4805V73.9805H223.605V74.4805H224.105ZM321.195 74.4805H321.695V73.9805H321.195V74.4805ZM321.195 111.72V112.22H321.695V111.72H321.195ZM224.105 111.72H223.605V112.22H224.105V111.72ZM224.105 74.9805H321.195V73.9805H224.105V74.9805ZM320.695 74.4805V111.72H321.695V74.4805H320.695ZM321.195 111.22H224.105V112.22H321.195V111.22ZM224.605 111.72V74.4805H223.605V111.72H224.605Z"
					fill="#A4ADB0"
				/>
				<path
					d="M224.105 111.721H321.195V148.961H224.105V111.721Z"
					fill="white"
				/>
				<path
					d="M246.05 132.969L249.132 134.83L248.314 131.324L251.038 128.964L247.451 128.66L246.05 125.354L244.649 128.66L241.062 128.964L243.786 131.324L242.968 134.83L246.05 132.969Z"
					fill="#70797C"
				/>
				<rect
					x="256.025"
					y="127.016"
					width="47.214"
					height="6.65"
					rx="3.325"
					fill="#A4ADB0"
				/>
				<rect
					x="256.025"
					y="127.016"
					width="47.214"
					height="6.65"
					rx="3.325"
					fill="url(#paint14_linear_901_81053)"
					fillOpacity="0.2"
				/>
				<rect
					x="305.234"
					y="127.016"
					width="0.001"
					height="0.001"
					fill="#C4C4C4"
				/>
				<path
					d="M224.105 111.721V111.221H223.605V111.721H224.105ZM321.195 111.721H321.695V111.221H321.195V111.721ZM321.195 148.961V149.461H321.695V148.961H321.195ZM224.105 148.961H223.605V149.461H224.105V148.961ZM224.105 112.221H321.195V111.221H224.105V112.221ZM320.695 111.721V148.961H321.695V111.721H320.695ZM321.195 148.461H224.105V149.461H321.195V148.461ZM224.605 148.961V111.721H223.605V148.961H224.605Z"
					fill="#A4ADB0"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_901_81053"
						x1="39.8995"
						y1="15.2949"
						x2="39.8995"
						y2="21.9449"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_901_81053"
						x1="64.8376"
						y1="52.5352"
						x2="64.8376"
						y2="59.1852"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_901_81053"
						x1="114.712"
						y1="52.5352"
						x2="114.712"
						y2="59.1852"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_901_81053"
						x1="70.1574"
						y1="89.7754"
						x2="70.1574"
						y2="96.4254"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_901_81053"
						x1="62.5099"
						y1="127.016"
						x2="62.5099"
						y2="133.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_901_81053"
						x1="173.232"
						y1="15.2949"
						x2="173.232"
						y2="21.9449"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint6_linear_901_81053"
						x1="202.159"
						y1="14.1328"
						x2="202.159"
						y2="23.1103"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint7_linear_901_81053"
						x1="181.212"
						y1="52.5352"
						x2="181.212"
						y2="59.1852"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_901_81053"
						x1="173.564"
						y1="89.7754"
						x2="173.564"
						y2="96.4254"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint9_linear_901_81053"
						x1="184.537"
						y1="127.016"
						x2="184.537"
						y2="133.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint10_linear_901_81053"
						x1="257.022"
						y1="15.2949"
						x2="257.022"
						y2="21.9449"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint11_linear_901_81053"
						x1="299.25"
						y1="14.1328"
						x2="299.25"
						y2="23.1103"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint12_linear_901_81053"
						x1="274.312"
						y1="52.5352"
						x2="274.312"
						y2="59.1852"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint13_linear_901_81053"
						x1="270.987"
						y1="89.7754"
						x2="270.987"
						y2="96.4254"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint14_linear_901_81053"
						x1="279.632"
						y1="127.016"
						x2="279.632"
						y2="133.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}
