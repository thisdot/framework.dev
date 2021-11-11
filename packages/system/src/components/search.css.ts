import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const searchStyle = style([
	sprinkles({
		layout: "stack",
		gap: 24
	}),
	{
		// Put custom CSS here
	},
])