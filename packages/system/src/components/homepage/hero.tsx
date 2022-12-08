import classNames from "classnames"
import React from "react"
import { formatAllFrameworkTitles } from "../../util/string-utils"
import {
	heroStyle,
	heroHeadingStyle,
	heroParagraphStyle,
	heroLinesStyle,
	heroBackgroundStyle,
	heroContainerStyle,
	heroFeatureHighlightRowStyle,
	heroFeatureHighlightStyle,
	heroFeatureHighlightTitleStyle,
	heroFeatureHighlightIconStyle,
} from "./hero.css"
import { getBackgroundImage } from "./hero-images"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { Logo } from "../logo"

export interface HeroProps extends React.ComponentPropsWithoutRef<"div"> {
	siteName: string
}

export function Hero({ className, siteName, ...props }: HeroProps) {
	return (
		<header className={classNames(className, heroContainerStyle)} {...props}>
			<div className={heroStyle}>
				<LeftHandSideLines />
				<RightHandSideLines />
				<img
					src={getBackgroundImage(siteName)}
					alt=""
					className={heroBackgroundStyle}
				/>
				<Logo className={heroHeadingStyle} siteName={siteName} stretched />
				<p className={heroParagraphStyle}>
					Search, compare, and discover top {formatAllFrameworkTitles(siteName)}{" "}
					libraries and community-driven resources in{" "}
					{formatAllFrameworkTitles(siteName)}.
				</p>
			</div>
			<div className={heroFeatureHighlightRowStyle}>
				<a className={heroFeatureHighlightStyle} href="/categories/libraries">
					<SearchFeatureHighlightIcon />
					<p className={heroFeatureHighlightTitleStyle}>Search</p>
				</a>
				<a className={heroFeatureHighlightStyle} href="/categories/libraries">
					<CompareFeatureHighlightIcon />
					<p className={heroFeatureHighlightTitleStyle}>Compare</p>
				</a>
				<a className={heroFeatureHighlightStyle} href="/categories/libraries">
					<BrowseFeatureHighlightIcon />
					<p className={heroFeatureHighlightTitleStyle}>Discover</p>
				</a>
			</div>
		</header>
	)
}

const LeftHandSideLines = () => (
	<svg
		aria-hidden
		width="155"
		height="424"
		viewBox="0 0 155 424"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		className={heroLinesStyle.leftHandSide}
	>
		<path d="M8 442L8 177.069M8 -248V45.1659M8 177.069H43C60.6731 177.069 75 162.742 75 145.069V-248M8 177.069V45.1659M8 45.1659H131C144.255 45.1659 155 34.4207 155 21.1659V-248" />
		<circle r="7" transform="matrix(1 0 0 -1 75 142)" fill="white" />
		<circle r="7" transform="matrix(1 0 0 -1 8 45)" fill="white" />
	</svg>
)

const RightHandSideLines = () => (
	<svg
		aria-hidden
		width="155"
		height="424"
		viewBox="0 0 155 424"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		className={heroLinesStyle.rightHandSide}
	>
		<path d="M8 -8V45.9309M8 471V177.834M8 45.9309H43C60.6731 45.9309 75 60.2578 75 77.9309V471M8 45.9309V177.834M8 177.834H131C144.255 177.834 155 188.579 155 201.834V471" />
		<circle cx="75" cy="84" r="7" fill="white" />
		<circle cx="8" cy="177" r="7" fill="white" />
	</svg>
)

const BrowseFeatureHighlightIcon = () => (
	<svg
		width="64"
		height="64"
		viewBox="17 9 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={heroFeatureHighlightIconStyle}
	>
		<path
			d="M81 41C81 58.6731 66.6731 73 49 73C31.3269 73 17 58.6731 17 41C17 23.3269 31.3269 9 49 9C66.6731 9 81 23.3269 81 41Z"
			fill="white"
		/>
		<path
			d="M77 41C77 56.464 64.464 69 49 69C33.536 69 21 56.464 21 41C21 25.536 33.536 13 49 13C64.464 13 77 25.536 77 41Z"
			className={sprinkles({ fill: "surface1" })}
		/>
		<path
			d="M77 41C77 56.464 64.464 69 49 69C33.536 69 21 56.464 21 41C21 25.536 33.536 13 49 13C64.464 13 77 25.536 77 41Z"
			className={sprinkles({ fill: "primary" })}
			fillOpacity="0.05"
		/>
		<g clipPath="url(#clip0_1639_22139)">
			<path
				d="M17 6C17 4.89543 17.8954 4 19 4H51C52.1046 4 53 4.89543 53 6V30C53 31.1046 52.1046 32 51 32H19C17.8954 32 17 31.1046 17 30V6Z"
				className={sprinkles({ fill: "tertiary" })}
			/>
			<path
				d="M25 16.5C25 15.6716 25.6716 15 26.5 15H48.5C49.3284 15 50 15.6716 50 16.5C50 17.3284 49.3284 18 48.5 18H26.5C25.6716 18 25 17.3284 25 16.5Z"
				className={sprinkles({ fill: "surface1" })}
				fillOpacity="0.16"
			/>
			<path
				d="M20 21.5C20 20.6716 20.6716 20 21.5 20H48.5C49.3284 20 50 20.6716 50 21.5C50 22.3284 49.3284 23 48.5 23H21.5C20.6716 23 20 22.3284 20 21.5Z"
				className={sprinkles({ fill: "surface1" })}
				fillOpacity="0.16"
			/>
			<path
				d="M34 28C34 26.8954 34.8954 26 36 26H68C69.1046 26 70 26.8954 70 28V52C70 53.1046 69.1046 54 68 54H36C34.8954 54 34 53.1046 34 52V28Z"
				className={sprinkles({ fill: "highlight" })}
			/>
			<path
				d="M57 34.5C57 33.6716 57.6716 33 58.5 33H65.5C66.3284 33 67 33.6716 67 34.5C67 35.3284 66.3284 36 65.5 36H58.5C57.6716 36 57 35.3284 57 34.5Z"
				className={sprinkles({ fill: "primary" })}
				fillOpacity="0.16"
			/>
			<path
				d="M57 39.5C57 38.6716 57.6716 38 58.5 38H65.5C66.3284 38 67 38.6716 67 39.5C67 40.3284 66.3284 41 65.5 41H58.5C57.6716 41 57 40.3284 57 39.5Z"
				className={sprinkles({ fill: "primary" })}
				fillOpacity="0.16"
			/>
			<path
				d="M57 44.5C57 43.6716 57.6716 43 58.5 43H65.5C66.3284 43 67 43.6716 67 44.5C67 45.3284 66.3284 46 65.5 46H58.5C57.6716 46 57 45.3284 57 44.5Z"
				className={sprinkles({ fill: "primary" })}
				fillOpacity="0.16"
			/>
			<path
				d="M45 49C44.7782 49 44.5802 48.8613 44.5044 48.6528L43.0311 44.6014L40.0832 45.5839C39.9058 45.643 39.6935 45.6065 39.5435 45.4565C39.4022 45.3153 39.3529 45.1063 39.4161 44.9168L40.3987 41.9689L36.3472 40.4956C36.1387 40.4198 36 40.2218 36 40C36 39.7782 36.1387 39.5802 36.3472 39.5044L40.3987 38.0311L39.4161 35.0832C39.3529 34.8937 39.4022 34.6847 39.5435 34.5435C39.6935 34.3935 39.9058 34.357 40.0832 34.4161L43.0311 35.3986L44.5044 31.3472C44.5802 31.1387 44.7782 31 45 31C45.2218 31 45.4198 31.1387 45.4956 31.3472L46.9689 35.3987L49.9168 34.4161C50.0931 34.3573 50.3056 34.3926 50.4565 34.5435C50.5978 34.6848 50.6471 34.8937 50.5839 35.0832L49.6014 38.0311L53.653 39.5044C53.7832 39.5518 53.8862 39.6469 53.9451 39.7657C53.9805 39.837 54 39.9168 54 40C54 40.0894 53.9774 40.175 53.9369 40.2503C53.8768 40.3616 53.7773 40.4504 53.653 40.4956L49.6014 41.9689L50.5839 44.9168C50.6471 45.1063 50.5978 45.3152 50.4565 45.4565C50.3056 45.6074 50.0931 45.6427 49.9168 45.5839L46.9689 44.6013L45.4956 48.653C45.4482 48.7832 45.3531 48.8862 45.2343 48.9451C45.163 48.9805 45.0832 49 45 49Z"
				className={sprinkles({ fill: "primary" })}
				fillOpacity="0.16"
			/>
			<path
				d="M18 45C18 43.8954 18.8954 43 20 43H52C53.1046 43 54 43.8954 54 45V69C54 70.1046 53.1046 71 52 71H20C18.8954 71 18 70.1046 18 69V45Z"
				className={sprinkles({ fill: "secondaryContainer" })}
			/>
			<path
				d="M20 51.5C20 50.6716 20.6716 50 21.5 50H28.5C29.3284 50 30 50.6716 30 51.5C30 52.3284 29.3284 53 28.5 53H21.5C20.6716 53 20 52.3284 20 51.5Z"
				className={sprinkles({ fill: "secondary" })}
				fillOpacity="0.16"
			/>
			<path
				d="M20 56.5C20 55.6716 20.6716 55 21.5 55H28.5C29.3284 55 30 55.6716 30 56.5C30 57.3284 29.3284 58 28.5 58H21.5C20.6716 58 20 57.3284 20 56.5Z"
				className={sprinkles({ fill: "secondary" })}
				fillOpacity="0.16"
			/>
			<path
				d="M20 61.5C20 60.6716 20.6716 60 21.5 60H23.5C24.3284 60 25 60.6716 25 61.5C25 62.3284 24.3284 63 23.5 63H21.5C20.6716 63 20 62.3284 20 61.5Z"
				className={sprinkles({ fill: "secondary" })}
				fillOpacity="0.16"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M42 65C46.9706 65 51 60.9706 51 56C51 51.0294 46.9706 47 42 47C37.0294 47 33 51.0294 33 56C33 60.9706 37.0294 65 42 65ZM44 60.4876V62C41.98 62 40.535 61.6823 40.535 59.3449V58.2924C40.535 57.3204 40.15 56.9079 39 56.9079V55.0873C40.15 55.0873 40.535 54.6748 40.535 53.7029V52.6551C40.535 50.3177 41.98 50 44 50V51.5077C42.815 51.5077 42.575 51.9392 42.575 52.8589V54.2434C42.575 54.9688 42.245 55.6231 40.795 55.9028V56.0925C42.245 56.3722 42.575 57.0265 42.575 57.7566V59.1411C42.575 60.0561 42.815 60.4876 44 60.4876Z"
				className={sprinkles({ fill: "secondary" })}
				fillOpacity="0.16"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1639_22139">
				<rect x="21" y="13" width="56" height="56" rx="28" fill="white" />
			</clipPath>
		</defs>
	</svg>
)

const SearchFeatureHighlightIcon = () => (
	<svg
		width="64"
		height="64"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={heroFeatureHighlightIconStyle}
	>
		<path
			d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
			fill="white"
		/>
		<path
			d="M60 32C60 47.464 47.464 60 32 60C16.536 60 4 47.464 4 32C4 16.536 16.536 4 32 4C47.464 4 60 16.536 60 32Z"
			className={sprinkles({ fill: "surface1" })}
		/>
		<g clipPath="url(#clip0_1541_201164)">
			<path
				d="M-4.3335 26C-4.3335 23.7909 -2.54264 22 -0.333496 22H52.6665C54.8756 22 56.6665 23.7909 56.6665 26V36C56.6665 38.2091 54.8756 40 52.6665 40H-0.333497C-2.54264 40 -4.3335 38.2091 -4.3335 36V26Z"
				className={sprinkles({ fill: "surface" })}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M52.6665 23H-0.333496C-1.99035 23 -3.3335 24.3431 -3.3335 26V36C-3.3335 37.6569 -1.99035 39 -0.333497 39H52.6665C54.3234 39 55.6665 37.6569 55.6665 36V26C55.6665 24.3431 54.3234 23 52.6665 23ZM-0.333496 22C-2.54264 22 -4.3335 23.7909 -4.3335 26V36C-4.3335 38.2091 -2.54264 40 -0.333497 40H52.6665C54.8756 40 56.6665 38.2091 56.6665 36V26C56.6665 23.7909 54.8756 22 52.6665 22H-0.333496Z"
				className={sprinkles({ fill: "tertiaryBorder" })}
			/>
			<path
				d="M26 31C26 32.6569 24.6569 34 23 34C21.3431 34 20 32.6569 20 31C20 29.3431 21.3431 28 23 28C24.6569 28 26 29.3431 26 31Z"
				className={sprinkles({ fill: "highlight" })}
			/>
			<path
				d="M35 31C35 32.6569 33.6569 34 32 34C30.3431 34 29 32.6569 29 31C29 29.3431 30.3431 28 32 28C33.6569 28 35 29.3431 35 31Z"
				className={sprinkles({ fill: "secondaryContainer" })}
			/>
			<path
				d="M44 31C44 32.6569 42.6569 34 41 34C39.3431 34 38 32.6569 38 31C38 29.3431 39.3431 28 41 28C42.6569 28 44 29.3431 44 31Z"
				fill="#57B1FC"
			/>
			<path
				d="M19.0229 45.3085L25.9511 49.3085L17.3171 66.263L8.65688 61.263L19.0229 45.3085Z"
				className={sprinkles({ fill: "regularText" })}
			/>
			<path
				d="M18.6569 43.9424C18.933 43.4641 19.5446 43.3003 20.0229 43.5764L26.9511 47.5764C27.4294 47.8526 27.5933 48.4641 27.3171 48.9424L25.8171 51.5405C25.541 52.0188 24.9294 52.1827 24.4511 51.9065L17.5229 47.9065C17.0446 47.6304 16.8807 47.0188 17.1569 46.5405L18.6569 43.9424Z"
				className={sprinkles({ fill: "secondaryContainer" })}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.487 45.5764C31.618 50.2708 42.015 47.4849 46.7094 39.354C51.4039 31.223 48.618 20.8259 40.487 16.1315C32.356 11.4371 21.959 14.223 17.2646 22.354C12.5702 30.4849 15.356 40.882 23.487 45.5764ZM21.987 48.1745C31.5529 53.6973 43.7847 50.4198 49.3075 40.854C54.8304 31.2881 51.5529 19.0563 41.987 13.5334C32.4212 8.0106 20.1894 11.2881 14.6665 20.854C9.14366 30.4198 12.4212 42.6516 21.987 48.1745Z"
				className={sprinkles({ fill: "regularText" })}
			/>
		</g>
		<defs>
			<clipPath id="clip0_1541_201164">
				<rect x="4" y="4" width="56" height="56" rx="28" fill="white" />
			</clipPath>
		</defs>
	</svg>
)

const CompareFeatureHighlightIcon = () => (
	<svg
		width="64"
		height="64"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={heroFeatureHighlightIconStyle}
	>
		<path
			d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
			fill="white"
		/>
		<path
			d="M60 32C60 47.464 47.464 60 32 60C16.536 60 4 47.464 4 32C4 16.536 16.536 4 32 4C47.464 4 60 16.536 60 32Z"
			className={sprinkles({ fill: "surface1" })}
		/>
		<path
			d="M33 19C33 17.8954 33.8954 17 35 17H53C54.1046 17 55 17.8954 55 19V40C55 41.1046 54.1046 42 53 42H35C33.8954 42 33 41.1046 33 40V19Z"
			className={sprinkles({ fill: "tertiary" })}
		/>
		<path
			d="M37 34C37 33.4477 37.4477 33 38 33H50C50.5523 33 51 33.4477 51 34C51 34.5523 50.5523 35 50 35H38C37.4477 35 37 34.5523 37 34Z"
			className={sprinkles({ fill: "tertiaryContainer" })}
			fillOpacity="0.16"
		/>
		<path
			d="M37 38C37 37.4477 37.4477 37 38 37H50C50.5523 37 51 37.4477 51 38C51 38.5523 50.5523 39 50 39H38C37.4477 39 37 38.5523 37 38Z"
			className={sprinkles({ fill: "tertiaryContainer" })}
			fillOpacity="0.16"
		/>
		<path
			d="M44 31C43.8521 31 43.7201 30.9075 43.6696 30.7686L42.6874 28.0676L40.7221 28.7226C40.6039 28.762 40.4623 28.7376 40.3623 28.6377C40.2681 28.5436 40.2353 28.4042 40.2774 28.2779L40.9325 26.3126L38.2314 25.3304C38.0925 25.2799 38 25.1479 38 25C38 24.8521 38.0925 24.7201 38.2314 24.6696L40.9325 23.6874L40.2774 21.7221C40.2353 21.5958 40.2681 21.4565 40.3623 21.3623C40.4623 21.2624 40.6039 21.238 40.7221 21.2774L42.6874 21.9324L43.6696 19.2314C43.7201 19.0925 43.8521 19 44 19C44.1479 19 44.2799 19.0925 44.3304 19.2314L45.3126 21.9325L47.2779 21.2774C47.3954 21.2382 47.537 21.2617 47.6377 21.3623C47.7319 21.4565 47.7647 21.5958 47.7226 21.7221L47.0676 23.6874L49.7686 24.6696C49.8554 24.7012 49.9241 24.7646 49.9634 24.8438C49.987 24.8913 50 24.9446 50 25C50 25.0596 49.985 25.1167 49.9579 25.1668C49.9179 25.2411 49.8515 25.3003 49.7686 25.3304L47.0676 26.3126L47.7226 28.2779C47.7647 28.4042 47.7319 28.5435 47.6377 28.6377C47.537 28.7383 47.3954 28.7618 47.2779 28.7226L45.3126 28.0676L44.3304 30.7686C44.2988 30.8554 44.2354 30.9241 44.1562 30.9634C44.1087 30.987 44.0554 31 44 31Z"
			className={sprinkles({ fill: "tertiaryContainer" })}
			fillOpacity="0.16"
		/>
		<path
			d="M9 19C9 17.8954 9.89543 17 11 17H29C30.1046 17 31 17.8954 31 19V40C31 41.1046 30.1046 42 29 42H11C9.89543 42 9 41.1046 9 40V19Z"
			className={sprinkles({ fill: "secondaryContainer" })}
		/>
		<path
			d="M13 34C13 33.4477 13.4477 33 14 33H26C26.5523 33 27 33.4477 27 34C27 34.5523 26.5523 35 26 35H14C13.4477 35 13 34.5523 13 34Z"
			className={sprinkles({ fill: "secondary" })}
			fillOpacity="0.16"
		/>
		<path
			d="M13 38C13 37.4477 13.4477 37 14 37H26C26.5523 37 27 37.4477 27 38C27 38.5523 26.5523 39 26 39H14C13.4477 39 13 38.5523 13 38Z"
			className={sprinkles({ fill: "secondary" })}
			fillOpacity="0.16"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M20 31C23.3137 31 26 28.3137 26 25C26 21.6863 23.3137 19 20 19C16.6863 19 14 21.6863 14 25C14 28.3137 16.6863 31 20 31ZM21 27.9917V29C19.788 29 18.921 28.7882 18.921 27.2299V26.5282C18.921 25.8803 18.69 25.6053 18 25.6053V24.3915C18.69 24.3915 18.921 24.1166 18.921 23.4686V22.7701C18.921 21.2118 19.788 21 21 21V22.0051C20.289 22.0051 20.145 22.2928 20.145 22.906V23.8289C20.145 24.3125 19.947 24.7487 19.077 24.9352V25.0616C19.947 25.2481 20.145 25.6843 20.145 26.1711V27.094C20.145 27.7041 20.289 27.9917 21 27.9917Z"
			className={sprinkles({ fill: "secondary" })}
			fillOpacity="0.16"
		/>
		<path
			d="M31 16C31 15.4477 31.4477 15 32 15C32.5523 15 33 15.4477 33 16V53C33 53.5523 32.5523 54 32 54C31.4477 54 31 53.5523 31 53V16Z"
			className={sprinkles({ fill: "regularText" })}
		/>
		<path
			d="M21.0123 45.0125C21.2775 45.0125 21.5318 45.1178 21.7193 45.3053C21.9068 45.4928 22.0121 45.7471 22.0121 46.0123C22.0121 46.2775 21.9068 46.5318 21.7193 46.7193L20.4263 48.0123L21.7193 49.3053C21.9014 49.4939 22.0022 49.7465 22 50.0087C21.9977 50.2709 21.8925 50.5217 21.7071 50.7071C21.5217 50.8925 21.2709 50.9977 21.0087 51C20.7465 51.0022 20.4939 50.9014 20.3053 50.7193L19.0123 49.4263L17.7193 50.7193C17.5307 50.9014 17.2781 51.0022 17.0159 51C16.7537 50.9977 16.5029 50.8925 16.3175 50.7071C16.1321 50.5217 16.0269 50.2709 16.0246 50.0087C16.0223 49.7465 16.1231 49.4939 16.3053 49.3053L17.5983 48.0123L16.3053 46.7193C16.2098 46.627 16.1336 46.5167 16.0812 46.3947C16.0288 46.2727 16.0012 46.1415 16 46.0087C15.9989 45.8759 16.0242 45.7442 16.0745 45.6213C16.1247 45.4984 16.199 45.3868 16.2929 45.2929C16.3868 45.199 16.4984 45.1247 16.6213 45.0745C16.7442 45.0242 16.8759 44.9989 17.0087 45C17.1415 45.0012 17.2727 45.0288 17.3947 45.0812C17.5167 45.1336 17.627 45.2098 17.7193 45.3053L19.0123 46.5983L20.3053 45.3053C20.4928 45.1178 20.7471 45.0125 21.0123 45.0125Z"
			className={sprinkles({ fill: "secondaryContainer" })}
		/>
		<path
			d="M48.0112 45.9913C48.0134 46.2535 47.9127 46.5061 47.7305 46.6947L43.7315 50.6947C43.544 50.8822 43.2897 50.9875 43.0245 50.9875C42.7593 50.9875 42.505 50.8822 42.3175 50.6947L40.3175 48.6947C40.222 48.6025 40.1458 48.4921 40.0934 48.3701C40.041 48.2481 40.0134 48.1169 40.0122 47.9841C40.0111 47.8513 40.0364 47.7197 40.0867 47.5968C40.137 47.4739 40.2112 47.3622 40.3051 47.2683C40.399 47.1744 40.5106 47.1002 40.6335 47.0499C40.7564 46.9996 40.8881 46.9743 41.0209 46.9755C41.1537 46.9766 41.2849 47.0042 41.4069 47.0566C41.5289 47.109 41.6392 47.1852 41.7315 47.2807L43.0245 48.5737L46.3165 45.2807C46.5051 45.0986 46.7577 44.9978 47.0199 45C47.2821 45.0023 47.5329 45.1075 47.7183 45.2929C47.9037 45.4783 48.0089 45.7291 48.0112 45.9913Z"
			className={sprinkles({ fill: "tertiary" })}
		/>
	</svg>
)
