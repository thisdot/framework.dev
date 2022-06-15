import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const bannerTooltipStyle = style([
	sprinkles({
		borderRadius: 40,
		backgroundColor: "secondaryContainer",
		display: "flex",
		gap: { desktop: 64, mobile: 32 },
		flexDirection: { mobile: "column", desktop: "row" },
		paddingX: { mobile: 24, desktop: 0 },
		paddingY: { mobile: 32, desktop: 0 },
	}),
	{
		position: "relative",
		overflow: "hidden",
		"@media": {
			[breakpoints.desktop]: {
				minHeight: 128,
			},
		},
	},
])

export const bannerTooltipHeadingStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: { desktop: "h300", mobile: "h200" },
		paddingLeft: { desktop: 48 },
		paddingY: { desktop: 32 },
	}),
	{
		textAlign: "center",
		fontWeight: "bold",
		lineHeight: pxToRem(24),
		"@media": {
			[breakpoints.desktop]: {
				maxWidth: pxToRem(550),
				textAlign: "start",
				lineHeight: pxToRem(32),
			},
		},
	},
])

export const bannerTooltipHeadingSoftStyle = sprinkles({
	color: "secondary",
})

export const bannerTooltipIconStyle = style([
	sprinkles({
		paddingTop: { desktop: 20 },
		display: "flex",
		gap: 12,
		justifyContent: { mobile: "center", desktop: "flex-start" },
	}),
])

export const bannerTooltipExplanatoryText = style([
	sprinkles({
		color: "secondary",
		marginBottom: 56,
		textStyle: "bodyShort2",
	}),
	{
		width: pxToRem(143),
		marginLeft: 20,
		textAlign: "center",
	},
])

export const bannerTooltipCardIcon = style([
	sprinkles({
		width: { desktop: "auto", mobile: "full" },
	}),
	{
		bottom: "0",
		position: "absolute",
	},
])

export const bannerTooltipCloseIcon = style({
	alignSelf: "center",
	width: pxToRem(25),
	position: "absolute",
	right: pxToRem(20),
	top: "5%",
	"@media": {
		[breakpoints.desktop]: {
			position: "relative",
			right: 0,
			top: 0,
			marginLeft: "auto",
			marginRight: 32,
		},
	},
})
