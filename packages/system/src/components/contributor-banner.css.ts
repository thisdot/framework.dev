import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const contributorBannerStyle = style([
	sprinkles({
		backgroundColor: "shaded",
		padding: { mobile: 32, tablet: 56 },
		borderRadius: 12,
		gap: { mobile: 32, tablet: 16 },
		display: {
			mobile: "flex",
			tablet: "grid",
		},
		flexDirection: "column",
		alignItems: "center",
	}),
	{
		gridTemplateColumns: "1fr min-content min-content",
	},
])

export const contributorImageStyle = style([
	sprinkles({ borderRadius: 24 }),
	{
		maxWidth: pxToRem(72),
		borderWidth: pxToRem(4),
		borderColor: vars.color.highlightBackground,
		borderStyle: "solid",
		selectors: {
			"& + &": {
				marginLeft: pxToRem(-14),
			},
		},
	},
])
