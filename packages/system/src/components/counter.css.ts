import { style } from "@vanilla-extract/css"

import { sprinkles } from "../sprinkles/sprinkles.css"

export const counterStyle = style([
	sprinkles({
		borderRadius: 24,
		textStyle: "minorHeading",
		fontWeight: "bold",
		paddingX: 10,
		paddingY: 4,
		backgroundColor: "onSurface",
		color: "surface",
	}),
])
