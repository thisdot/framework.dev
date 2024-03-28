import { style } from '@vanilla-extract/css'
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { pxToRem } from '../util/style-utils'

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
			full: {
				height: '100%',
				width: '100%',
			},
		},
	},
	defaultVariants: {
		size: 'medium',
	},
})
export const flipHorizontallyStyle = style({
	transform: 'scaleX(-1)',
})

export type IconVariants = RecipeVariants<typeof iconStyle>
