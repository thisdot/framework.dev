import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { pxToRem } from "../../util/style-utils"

export const comparisonTableStyle = style([
	sprinkles({
		border: "tableCell",
		borderRadius: 12,
		color: "regularText",
		display: "grid",
		textStyle: "bodyShort2",
		width: "full",
	}),
	{
		gridTemplateColumns: "max-content repeat(5, 1fr)",
		position: "relative",
		"::-webkit-scrollbar": {
			backgroundColor: "white",
			borderBottomLeftRadius: pxToRem(12),
			borderBottomRightRadius: pxToRem(12),
			height: pxToRem(30 * 2 + 4),
		},
		"::-webkit-scrollbar-track": {
			backgroundColor: vars.palette.neutral80,
			border: "30px solid rgba(255, 255, 255, 0)",
			backgroundClip: "padding-box",
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: vars.palette.neutral20,
			border: "30px solid rgba(255, 255, 255, 0)",
			backgroundClip: "padding-box",
		},
	},
])

export const comparisonTableLibraryIconStyle = style({
	height: pxToRem(24),
	width: pxToRem(24),
})
