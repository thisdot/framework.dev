import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const pageHeaderStyle = style([
	sprinkles({
		layout: "row",
		alignItems: "center",
		gap: 8,
		marginY: 48,
	}),
	{
		gridColumn: "1 / end",
	},
])
