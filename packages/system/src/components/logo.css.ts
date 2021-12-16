import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const logoStyle = sprinkles({
	layout: "row",
	gap: 6,
	alignItems: "center",
})
export const logoTitleStyle = sprinkles({
	color: "strongText",
	textStyle: "subtitle1",
})
export const logoAccentStyle = style([
	sprinkles({
		height: "full",
		display: "flex",
		alignItems: "center",
		backgroundColor: "primaryContainer",
		color: "onPrimaryContainer",
		textStyle: "bodyShort2",
		fontWeight: "bold",
		paddingX: 8,
		paddingY: 4,
		borderRadius: 8,
	}),
	{ height: pxToRem(24) },
])
