import { style } from "@vanilla-extract/css"

export const visuallyHidden = style({
	borderWidth: "0",
	clip: "rect(1px, 1px, 1px, 1px)",
	height: "1px",
	overflow: "hidden",
	padding: "0",
	position: "absolute",
	whiteSpace: "nowrap",
	width: "1px",
})
