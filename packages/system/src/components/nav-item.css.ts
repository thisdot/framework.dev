import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const navItemStyle = style([
	sprinkles({
		gap: 14,
		alignItems: "center",
		paddingX: 16,
		borderRadius: 12,
		layout: "row",
		textStyle: "button",
		justifyContent: "space-between",
	}),
	{
		height: pxToRem(44),
		transition: "background 0.15s ease-in",
		":hover": {
			transition: "none",
			backgroundColor: vars.palette.neutral95,
		},
		selectors: {
			"&[aria-current]": {
				backgroundColor: vars.palette.primary95
			}
		}
	},
])

export const navItemLabelStyle = style({
	width: "100%",
})

export const navItemIconStyle = style({
	fontSize: pxToRem(20),
	width: pxToRem(20),
	display: "grid",
	alignItems: "center",
	justifyItems: "left",
	color: vars.palette.neutral60,
	selectors: {
		"*:hover > &, *[aria-current] > &": {
			color: "currentcolor"
		},
	}
})
