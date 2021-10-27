import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const tagStyle = style([
	sprinkles({
		paddingY: "small",
	}),
	{
		background: "rgba(0, 0, 0, 0.04)",
		borderRadius: "4px",
		color: "#4D545C",
		cursor: "pointer",
		fontSize: "10px",
		fontWeight: 600,
		lineHeight: 1,
		letterSpacing: "0.05em",
		paddingLeft: "6px",
		paddingRight: "6px",
		textTransform: "uppercase",
	},
])
