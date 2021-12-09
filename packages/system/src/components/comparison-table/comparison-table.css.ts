import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const comparisonTableStyle = style([
	sprinkles({
		color: "regularText",
		display: "grid",
		textStyle: "bodyShort2",
	}),
	{
		width: "fit-content",
		gridTemplateColumns: "repeat(6, minmax(max-content, 1fr))",
		gridAutoRows: pxToRem(44),
		position: "relative",
		"@media": {
			[breakpoints.desktop]: {
				gridAutoRows: pxToRem(56),
			},
		},
	},
])

export const comparisonTableLibraryIconStyle = style({
	height: pxToRem(24),
	width: pxToRem(24),
})
