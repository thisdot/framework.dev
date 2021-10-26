import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/index.css"

export const selectContainerStyle = style([
	{
		position: "relative",
		width: "100%",
		border: "1px solid grey",
		borderRadius: "5px",
		"::after": {
			content: "",
			position: "absolute",
			right: "8px",
			top: "14px",
			width: "13px",
			height: "8px",
			backgroundColor: "black",
			clipPath: "polygon(100% 0%, 0 0%, 50% 100%)",
		},
	},
])

export const selectStyle = style([
	sprinkles({ padding: "medium" }),
	{
		width: "100%",
	},
])
