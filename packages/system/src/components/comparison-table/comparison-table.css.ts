import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const comparisonTableStyle = style([
	sprinkles({
		border: "tableCell",
		borderRadius: 12,
		color: "regularText",
		display: "grid",
		textStyle: "bodyShort2",
	}),
	{
		gridTemplateColumns: "max-content repeat(5, minmax(min-content, 1fr))",
		overflowX: "scroll",
		overflowY: "auto",
		position: "relative",
	},
])

export const comparisonTableLibraryIconStyle = style({
	height: pxToRem(24),
	width: pxToRem(24),
})
