import { style } from "@vanilla-extract/css"

import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"

export const counterStyle = style([
	sprinkles({
		borderRadius: 24,
		textStyle: "minorHeading",
		fontWeight: "bold",
		paddingX: 10,
		paddingY: 4,
	}),
	{ backgroundColor: themeColors.gray900, color: "#fff" },
])
