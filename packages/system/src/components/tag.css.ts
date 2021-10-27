import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const tagStyle = style([
	sprinkles({
		paddingY: 4,
		paddingX: 6,
		borderRadius: 4,
		fontSize: "xSmall",
		fontWeight: "bold",
		color: "regularText",
		backgroundColor: "regular",
	}),
	{
		cursor: "pointer",
		letterSpacing: "0.05em",
		textTransform: "uppercase",
	},
])
