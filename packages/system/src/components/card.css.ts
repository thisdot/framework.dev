import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const cardStyle = style([
	sprinkles({
		borderRadius: 8,
		padding: 20,
	}),
	{
		backgroundColor: "#fff",
		border: "1px solid rgba(0, 0, 0, 0.08)",
		boxShadow:
			"0px 1px 4px rgba(42, 49, 52, 0.05), 0px 6px 20px rgba(39, 47, 54, 0.02);",
	},
])
