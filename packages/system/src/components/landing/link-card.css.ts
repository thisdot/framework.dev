import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const linkCardStyle = style([
	sprinkles({
		alignItems: "center",
		borderRadius: 12,
		layout: "row",
		flexWrap: { desktop: "wrap", mobile: "nowrap" },
		paddingLeft: 16,
		paddingRight: { desktop: 16, mobile: 64 },
		paddingY: 16,
	}),
	{
		backgroundColor: "var(--card-background)",
		filter: "brightness(100%)",
		overflow: "hidden",
		position: "relative",
		selectors: {
			"&:before": {
				backgroundColor: "var(--link-card-background)",
				content: "''",
				height: "100%",
				left: 0,
				position: "absolute",
				top: 0,
				width: "100%",
				zIndex: -1,
			},
			"&:hover&:before": {
				filter: "brightness(90%)",
			},
		},
	},
])

export const linkCardIndicatorIconStyle = style([
	sprinkles({
		color: "white",
		height: "auto",
	}),
	{
		pointerEvents: "none",
		position: "absolute",
		right: pxToRem(20),
		top: "50%",
		transform: "translateY(-50%)",
		width: pxToRem(28),
		"@media": {
			[breakpoints.desktop]: {
				right: pxToRem(16),
				top: pxToRem(16),
				transform: "none",
			},
		},
	},
])

export const linkCardIconContainerStyle = style([
	sprinkles({
		backgroundColor: "white",
		borderRadius: { desktop: 56, mobile: 48 },
		display: "block",
		marginBottom: { mobile: 0, desktop: 32 },
		marginRight: 16,
	}),
	{
		height: pxToRem(48),
		position: "relative",
		width: pxToRem(48),
	},
])

export const linkCardIconStyle = style([
	sprinkles({
		height: "auto",
	}),
	{
		left: "50%",
		position: "absolute",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "50%",
	},
])

export const linkCardTitleStyle = style([
	sprinkles({
		color: "white",
		textStyle: { desktop: "h400", mobile: "h100" },
		width: { desktop: "full", mobile: "auto" },
	}),
	{
		flex: 1,
		"@media": {
			[breakpoints.desktop]: {
				flex: "unset",
				fontSize: pxToRem(18),
			},
		},
	},
])
