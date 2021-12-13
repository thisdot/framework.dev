import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"
import { vars } from "../../themes/themes.css"

export const comparisonBoxStyle = style([
	sprinkles({
		backgroundColor: "white",
		border: "thin",
		borderRadius: 12,
	}),
	{
		display: "grid",
		padding: pxToRem(15),
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
			'&[data-selected="true"]': {
				borderWidth: pxToRem(4),
				padding: pxToRem(12),
				borderColor: vars.palette.tertiary60,
			},
		},
	},
])
