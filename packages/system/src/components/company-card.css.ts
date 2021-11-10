import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const companyCardStyle = style([
	sprinkles({
		borderRadius: 12,
		display: "grid",
		backgroundColor: "surface",
		padding: 16,
		gap: 12,
		color: "regularText",
		layout: "stack",
	}),
	{
		minHeight: pxToRem(160),
	},
])

export const companyCardHeaderStyle = sprinkles({
	layout: "row",
	gap: 12,
})

export const companyCardLogoStyle = style([
	sprinkles({
		border: "light",
		borderRadius: 8,
	}),
	{
		height: pxToRem(40),
		width: pxToRem(40),
	},
])

export const companyCardNameStyle = sprinkles({
	layout: "stack",
	gap: 4,
})

export const companyCardBodyStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: "bodyLong2",
	}),
	{},
])
