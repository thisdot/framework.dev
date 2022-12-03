import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { vars } from '../../themes/themes.css'

export const libraryCardBadgeStyle = style({
	height: 20,
	maxWidth: '100%',
})

export const libraryPackageLinkStyle = style([
	sprinkles({
		borderRadius: 4,
		textStyle: 'buttonSmall',
	}),
	{
		backgroundColor: vars.palette.neutral30,
		cursor: 'pointer',
		transition: 'background 0.15s ease-in',
		selectors: {
			'&:hover, &:focus': {
				backgroundColor: vars.palette.neutral40,
				transition: 'none',
			},
		},
	},
])

export const libraryPackageTextStyle = style([
	sprinkles({
		display: 'block',
		marginY: 4,
		marginX: 8,
	}),
	{
		color: vars.palette.neutral95,
		transition: 'opacity 0.15s ease-in',
		':hover': {
			transition: 'none',
		},
	},
])
