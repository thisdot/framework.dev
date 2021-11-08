import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const bullet = style([
	sprinkles({
		paddingX: 6,
	}),
	{
		color: "outline",
	},
])
