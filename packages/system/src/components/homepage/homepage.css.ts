import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const homepageStyle = style([
	sprinkles({
		display: "grid",
		marginX: "auto",
		paddingX: {
			mobile: 16,
			desktop: 48,
		},
	}),
	{
		gap: pxToRem(128),
		maxWidth: pxToRem(1200),
		overflow: "auto",
	},
])

export const homepageTwoAndOneSectionStyle = style([
	sprinkles({
		gap: 48,
		display: "grid",
	}),
	{
		gridTemplate: "repeat(2, auto) / 1fr",
		"@media": {
			[breakpoints.desktop]: {
				gridTemplate: "auto / 2fr 1fr",
			},
		},
	},
])
