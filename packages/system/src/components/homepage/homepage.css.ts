import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const homepageStyle = style([
	sprinkles({
		display: "grid",
		paddingX: {
			mobile: 16,
			desktop: 48,
		},
	}),
	{
		gap: pxToRem(128),
		overflow: "auto",
	},
])
