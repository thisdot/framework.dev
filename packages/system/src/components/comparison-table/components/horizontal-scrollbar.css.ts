import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../../sprinkles/sprinkles.css"
import { pxToRem } from "../../../util/style-utils"

export const horizontalScrollbarContainerStyle = style({
	height: "100%",
	position: "relative",
})

export const horizontalScrollbarContentStyle = style({
	height: "100%",
	msOverflowStyle: "none",
	overflowX: "scroll",
	scrollbarWidth: "none",
	selectors: {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	},
})

export const horizontalScrollbarSectionStyle = style([
	sprinkles({
		display: "grid",
		paddingX: 24,
	}),
	{
		backgroundColor: "white",
		borderBottomLeftRadius: pxToRem(12),
		borderBottomRightRadius: pxToRem(12),
		gridTemplateColumns: "1fr auto",
		height: pxToRem(64),
		placeItems: "center",
	},
])

export const horizontalScrollbarTrackStyle = style({})

export const horizontalScrollbarThumbStyle = style({})
