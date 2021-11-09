import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const chipStyle = style([
	sprinkles({
		textStyle: "caption",
		borderRadius: 8,
		border: "thin",
		backgroundColor: "surface",
		color: "onSurface",
		paddingX: 12,
	}),
	{
		height: pxToRem(32),
		display: "inline-grid",
		justifyContent: "center",
		alignContent: "center",
		cursor: "pointer",
		transition: "background 0.15s ease-in",
		selectors: {
			"&:hover, &:focus": {
				transition: "none",
				backgroundColor: vars.palette.neutral95,
			},
			"&:active": {
				backgroundColor: vars.palette.neutral90,
			},
		},
	},
])

export const chipIconStyle = style({
	fontSize: pxToRem(15),
	width: pxToRem(18),
	height: pxToRem(18),
	display: "grid",
	alignItems: "center",
	justifyItems: "center",
	color: vars.palette.neutral80,
})
