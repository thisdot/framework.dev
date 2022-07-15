import { style } from '@vanilla-extract/css'
import { sprinkles } from '../sprinkles/sprinkles.css'
import { vars } from '../themes/themes.css'
import { pxToRem } from '../util/style-utils'

export const chipSelectorStyle = style([
	sprinkles({
		textStyle: 'caption',
		borderRadius: 8,
		border: 'thin',
		backgroundColor: 'surface',
		color: 'onSurface',
		paddingX: 12,
	}),
	{
		height: pxToRem(32),
		display: 'inline-flex',
		flexDirection: 'row',
		alignItems: 'center',
		cursor: 'pointer',
		transition: 'background 0.15s ease-in',
		selectors: {
			'input:not(:checked) + &:hover, input:not(:checked) + &:focus': {
				transition: 'none',
				backgroundColor: vars.palette.neutral95,
			},
			'input:not(:checked) + &:active': {
				backgroundColor: vars.palette.neutral90,
			},
			'input:checked + &': {
				backgroundColor: vars.themeColors.secondaryContainer,
			},
		},
	},
])

export const chipSelectorIconStyle = style({
	overflow: 'hidden',
	display: 'grid',
	alignItems: 'center',
	justifyItems: 'center',
	selectors: {
		'input:checked + label > &:after': {
			content: '""',
			clipPath:
				'polygon(37.5% 67.4%, 20.1% 50.0%, 14.2% 55.9%, 37.5% 79.2%, 87.5% 29.2%, 81.6% 23.3%, 37.5% 67.4%)',
			marginLeft: pxToRem(6),
			height: pxToRem(18),
			width: pxToRem(18),
			backgroundColor: 'currentcolor',
		},
	},
})
