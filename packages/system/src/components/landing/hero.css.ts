import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { pxToRem } from "../../util/style-utils"

export const heroStyle = style([
	sprinkles({
		justifyContent: "center",
		layout: "row",
		paddingBottom: { mobile: 56 },
		paddingTop: { mobile: 16, desktop: 32 },
		paddingX: { mobile: 16, desktop: 0 },
		width: "full",
	}),
	{
		backgroundColor: vars.palette.neutralVariant99,
		"@media": {
			[breakpoints.desktop]: {
				paddingBottom: pxToRem(76),
			},
		},
	},
])

export const heroInnerStyle = style([
	sprinkles({
		width: "full",
	}),
	{
		maxWidth: pxToRem(1080),
	},
])

export const heroHeaderStyle = style([
	sprinkles({
		marginBottom: { mobile: 24 },
	}),
	{
		width: pxToRem(156),
		height: pxToRem(36),
		"@media": {
			[breakpoints.desktop]: {
				marginBottom: pxToRem(76),
			},
		},
	},
])

export const heroBodyStyle = style([
	sprinkles({
		marginBottom: { mobile: 32, desktop: 64 },
	}),
	{
		selectors: {
			"&:last-child": {
				marginBottom: 0,
			},
		},
		"@media": {
			[breakpoints.desktop]: {
				width: pxToRem(740),
			},
		},
	},
])

export const heroTitleStyle = style([
	sprinkles({
		color: "regularText",
		marginBottom: { mobile: 16, desktop: 24 },
		textStyle: { desktop: "h500", mobile: "h400" },
		layout: { mobile: "row" },
		alignItems: "center",
		gap: 10,
		flexWrap: "wrap",
	}),
	{
		selectors: {
			"&:last-child": {
				marginBottom: 0,
			},
		},
		"@media": {
			[breakpoints.desktop]: {
				fontSize: pxToRem(64),
			},
		},
	},
])

export const heroSoftTitleStyle = sprinkles({
	color: "softText",
})

export const heroSubtitleStyle = style([
	{
		selectors: {
			"&:last-child": {
				marginBottom: 0,
			},
		},
		"@media": {
			[breakpoints.desktop]: {
				width: "75%",
			},
		},
	},
])

export const heroIconTyle = style({
	display: "inline-block",
	height: "1.5em",
	width: "auto",
})

export const linkCardGroupStyle = style([
	{
		"@media": {
			[breakpoints.desktop]: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
			},
		},
	},
])
