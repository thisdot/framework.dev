import { recipe } from "@vanilla-extract/recipes"

import { sprinkles } from "../sprinkles/sprinkles.css"

export const counterStyle = recipe({
	base: sprinkles({
		borderRadius: 24,
		paddingY: 4,
		backgroundColor: "onSurface",
		color: "surface",
	}),
	variants: {
		size: {
			small: sprinkles({ textStyle: "buttonSmall", paddingX: 8 }),
			medium: sprinkles({ textStyle: "button", paddingX: 10 }),
		},
	},
	defaultVariants: {
		size: "medium",
	},
})
