import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"

export const bullet = style([
	sprinkles({
		paddingX: 6,
	}),
	{
		color: themeColors.gray300,
	},
])
