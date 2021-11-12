import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const comparisonTableContainerStyle = style([
	sprinkles({}),
	{
		// Put custom CSS here
	},
])

export const comparisonTableStyle = style([
	sprinkles({
		border: "tableCell",
		borderRadius: 12,
		color: "regularText",
		textStyle: "bodyShort2",
	}),
	{
		borderCollapse: "collapse",
		outline: "0.5px solid #C4C7C8",
		overflow: "hidden",
	},
])

export const comparisonTableLibraryIconStyle = style({
	height: pxToRem(24),
	width: pxToRem(24),
})

export const comparisonTableCellStyle = style([
	sprinkles({
		border: "tableCell",
		paddingX: 24,
		paddingY: 20,
	}),
	{
		minWidth: "max-content",
		verticalAlign: "middle",
	},
])

export const comparisonTableCellContentsStyle = style([
	sprinkles({
		display: "grid",
		gap: 12,
	}),
	{
		gridAutoFlow: "column",
		placeItems: "center",
	},
])

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
