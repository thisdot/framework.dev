import { recipe } from "@vanilla-extract/recipes"
import type { VariantSelection } from "@vanilla-extract/recipes/dist/declarations/src/types"

import { sprinkles } from "../sprinkles/sprinkles.css"

const counterVariants = {
	size: {
		small: sprinkles({ textStyle: "buttonSmall", paddingX: 8 }),
		medium: sprinkles({ textStyle: "button", paddingX: 10 }),
	},
} as const

export type CounterVariants = VariantSelection<typeof counterVariants>

export const counterStyle = recipe({
	base: sprinkles({
		borderRadius: 24,
		paddingY: 4,
		backgroundColor: "onSurface",
		color: "surface",
	}),
	variants: counterVariants,
	defaultVariants: {
		size: "medium",
	},
})
