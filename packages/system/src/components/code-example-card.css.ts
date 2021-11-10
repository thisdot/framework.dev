import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const codeExampleCardStyle = style([
	sprinkles({
		borderRadius: 12,
		display: "grid",
		backgroundColor: "surface",
		padding: 16,
		gap: 12,
	}),
	{
		gridTemplateRows: "auto 1fr auto",
		minHeight: pxToRem(160),
	},
])

export const codeExampleCardHeaderStyle = sprinkles({
	layout: "row",
	gap: 12,
})

export const codeExampleCardNameStyle = sprinkles({
	layout: "stack",
	gap: 4,
})

export const codeExampleCardBodyStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: "bodyLong2",
		paddingBottom: 12,
	}),
	{},
])
