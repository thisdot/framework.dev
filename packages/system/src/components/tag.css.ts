import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

export const tagStyle = style([
	sprinkles({
		paddingY: 4,
		paddingX: 6,
		borderRadius: 4,
		textStyle: "tinyCaps",
		fontWeight: "bold",
		color: "regularText",
	}),
	{
		backgroundColor: vars.palette.neutral95,
		cursor: "pointer",
		letterSpacing: "0.05em",
	},
])
