import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const resourceTagStyle = style([
	sprinkles({
		borderRadius: 12,
		paddingX: 8,
		border: "thin",
		textStyle: "clickable",
		layout: "row",
		gap: 6,
	}),
	{
		textTransform: "capitalize",
		height: pxToRem(32),
		display: "inline-flex",
		alignItems: "center",
	},
])
