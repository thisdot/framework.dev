import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const infoPopupOverlayStyle = style({
	position: "fixed",
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	overflow: "auto",
})

export const infoPopupContentStyle = style([
	sprinkles({
		display: "block",
		backgroundColor: "surface",
		padding: 12,
		border: "thin",
		borderRadius: 8,
	}),
	{
		boxShadow: "0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
		filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3))",
		maxWidth: pxToRem(260),
		position: "absolute",
	},
])

export const infoPopupArrowStyle = recipe({
	base: { position: "absolute", width: 0, height: 0 },
	variants: {
		orientation: {
			up: {
				borderLeft: "10px solid transparent",
				borderRight: "10px solid transparent",
				borderBottom: `8px solid ${vars.themeColors.outline}`,
				top: "-8px",
			},
			down: {
				borderLeft: "10px solid transparent",
				borderRight: "10px solid transparent",
				borderTop: `8px solid ${vars.themeColors.outline}`,
				bottom: "-8px",
			},
		},
	},
})
