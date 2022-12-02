import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { vars } from '../../themes/themes.css'

export const libraryCardBadgeStyle = style({
	height: 20,
	maxWidth: '100%',
})

export const libraryPackageLinkStyle = style([
	sprinkles({
		backgroundColor: 'background',
		border: 'light',
		paddingY: 4,
		paddingX: 8,
		borderRadius: 6,
		textStyle: 'buttonSmall',
	}),
	{
		cursor: 'pointer',
		transition: 'background 0.15s ease-in',
		selectors: {
			'&:hover, &:focus': {
				backgroundColor: vars.palette.neutral90,
				transition: 'none',
			},
		},
	},
])

export const libraryPackageTextStyle = style([
	{
		opacity: 0.6,
		transition: 'opacity 0.15s ease-in',
		':hover': {
			opacity: 0.75,
			transition: 'none',
		},
	},
])
