import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { pxToRem } from "../../util/style-utils"

export const comparisonTableStyle = style([
	sprinkles({
		border: "tableCell",
		borderRadius: 12,
		color: "regularText",
		textStyle: "bodyShort2",
	}),
	{
		borderCollapse: "separate",
		borderSpacing: 0,
		position: "relative",
	},
])

export const comparisonTableLibraryIconStyle = style({
	height: pxToRem(24),
	width: pxToRem(24),
})

export const comparisonTableHeadStyle = style([
	sprinkles({
		fontWeight: "bold",
	}),
	{
		backgroundColor: vars.palette.neutralVariant99,
		borderTopLeftRadius: pxToRem(12),
		borderTopRightRadius: pxToRem(12),
	},
])

export const comparisonTableRowCellStyle = style({
	backgroundColor: "white",
})
