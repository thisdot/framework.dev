import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { VariantSelection } from "@vanilla-extract/recipes/dist/declarations/src/types"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

const tagContainerVariants = {
	color: {
		neutral: {
			backgroundColor: vars.palette.neutral95,
			transition: "background 0.15s ease-in",
			":hover": {
				backgroundColor: vars.palette.neutral90,
				transition: "none",
			},
		},
	},
} as const

export const tagContainerStyle = recipe({
	base: [
		sprinkles({
			paddingY: 4,
			paddingX: 8,
			borderRadius: 6,
			textStyle: "buttonSmall",
			color: "onSurface",
		}),
		{
			cursor: "pointer",
		},
	],
	variants: tagContainerVariants,
	defaultVariants: {
		color: "neutral",
	},
})

export type TagContainerVariants = VariantSelection<typeof tagContainerVariants>

export const tagTextStyle = style([
	sprinkles({
		textStyle: "buttonSmall",
		color: "onSurface",
	}),
	{
		opacity: 0.6,
		transition: "opacity 0.15s ease-in",
		":hover": {
			opacity: 0.75,
			transition: "none",
		},
	},
])
