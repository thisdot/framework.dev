import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const comparisonTableStyle = style([
	sprinkles({
		color: "regularText",
		display: "grid",
		textStyle: "bodyShort2",
		width: "full",
	}),
	{
		gridTemplateColumns: "max-content repeat(5, 1fr)",
		position: "relative",
	},
])

export const comparisonTableLibraryIconStyle = style({
	height: pxToRem(24),
	width: pxToRem(24),
})
