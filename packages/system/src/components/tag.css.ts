import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

export const tagStyle = recipe({
	base: [
		sprinkles({
			paddingY: 4,
			paddingX: 8,
			borderRadius: 6,
			textStyle: "buttonSmall",
			color: "onSurface",
		}),
		{
			textTransform: "capitalize",
			cursor: "pointer",
		},
	],
	variants: {
		color: {
			neutral: {
				backgroundColor: vars.palette.neutral95,
				":hover": {
					backgroundColor: vars.palette.neutral90,
				},
			},
			beginner: {
				backgroundColor: vars.themeColors.beginner,
			},
			intermediate: {
				backgroundColor: vars.themeColors.intermediate,
			},
			advanced: {
				backgroundColor: vars.themeColors.advanced,
			},
		},
	},
	defaultVariants: {
		color: "neutral",
	},
})
