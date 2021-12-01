import { globalStyle, style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

globalStyle(":root", {
	vars: {
		"--reach-tooltip": "1",
	},
})

export const tooltipStyle = style([
	sprinkles({
		padding: 8,
		textStyle: "caption",
		borderRadius: 6,
	}),
	{
		position: "absolute",
		backgroundColor: vars.palette.neutral20,
		color: vars.palette.neutral95,
	},
])

export const tooltipTriangleStyle = style({
	position: "absolute",
	fill: vars.palette.neutral20,
})
