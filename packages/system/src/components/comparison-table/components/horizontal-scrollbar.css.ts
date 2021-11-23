import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../../sprinkles/sprinkles.css"
import { pxToRem } from "../../../util/style-utils"

export const horizontalScrollbarContainerStyle = style({
	height: "100%",
	position: "relative",
})

export const horizontalScrollbarContentStyle = style({
	height: "90vh",
	msOverflowStyle: "none",
	overflow: "auto",
	scrollbarWidth: "none",
	selectors: {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	},
})

export const horizontalScrollbarSectionStyle = style([
	sprinkles({
		border: "tableCell",
		display: "grid",
		gap: 24,
		paddingX: 24,
		paddingY: 12,
	}),
	{
		backgroundColor: "white",
		borderBottomLeftRadius: pxToRem(12),
		borderBottomRightRadius: pxToRem(12),
		gridTemplateColumns: "1fr auto",
		placeItems: "center",
	},
])

export const horizontalScrollbarTrackStyle = style([
	sprinkles({
		backgroundColor: "tertiaryBorder",
		borderRadius: 12,
	}),
	{
		height: pxToRem(4),
		position: "relative",
		width: "100%",
	},
])

export const horizontalScrollbarThumbStyle = style([
	sprinkles({
		backgroundColor: "regularText",
		borderRadius: 12,
	}),
	{
		height: pxToRem(4),
		position: "absolute",
	},
])

export const horizontalScrollbarButtonContainerStyle = style([
	sprinkles({
		display: "grid",
		gap: 4,
	}),
	{
		gridTemplateColumns: "repeat(2, auto)",
	},
])

export const horizontalScrollbarButtonStyle = style([
	sprinkles({
		backgroundColor: "surface",
		border: "tableCell",
		borderRadius: 12,
		display: "grid",
	}),
	{
		height: pxToRem(40),
		placeItems: "center",
		width: pxToRem(40),
	},
])
