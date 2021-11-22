import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { pxToRem } from "../util/style-utils"

export const iconStyle = recipe({
	variants: {
		size: {
			medium: {
				height: pxToRem(18),
				width: pxToRem(18),
			},
			large: {
				height: pxToRem(24),
				width: pxToRem(24),
			},
		},
	},
	defaultVariants: {
		size: "medium",
	},
})

export type IconVariants = RecipeVariants<typeof iconStyle>
