import { style } from '@vanilla-extract/css'
import { sprinkles } from '../sprinkles/sprinkles.css'
import { vars } from '../themes/themes.css'
import { pxToRem } from '../util/style-utils'

export const navItemStyle = style([
	sprinkles({
		gap: 14,
		alignItems: 'center',
		borderRadius: 12,
		layout: 'row',
		textStyle: 'button',
		justifyContent: 'space-between',
	}),
	{
		paddingLeft: pxToRem(15),
		paddingRight: pxToRem(15),
		position: 'relative',
		height: pxToRem(44),
		transition: 'background 0.15s ease-in',
		border: '1px solid transparent',
		':hover': {
			transition: 'none',
			backgroundColor: vars.palette.neutral95,
		},
		selectors: {
			'&[aria-current]': {
				backgroundColor: vars.palette.primary95,
			},
			'&[aria-expanded]::after': {
				content: '',
				position: 'absolute',
				right: pxToRem(16),
				width: pxToRem(18),
				height: pxToRem(18),
				backgroundColor: 'currentColor',
				transform: 'rotate(0deg)',
				clipPath:
					'polygon(30.9% 35.8%, 50.0% 54.9%, 69.1% 35.8%, 75.0% 41.7%, 50.0% 66.7%, 25.0% 41.7%, 30.9% 35.8%)',
			},
			'&[aria-expanded="true"]::after': {
				transform: 'rotate(-90deg)',
			},
			'&[aria-expanded="true"]:not([aria-current])': {
				borderColor: vars.themeColors.outline,
			},
		},
	},
])

export const navItemLabelStyle = style({
	width: '100%',
})

export const navItemIconStyle = style({
	fontSize: pxToRem(20),
	width: pxToRem(20),
	display: 'grid',
	alignItems: 'center',
	justifyItems: 'left',
	color: vars.palette.neutral60,
	selectors: {
		'*:hover > &, *[aria-current] > &': {
			color: 'currentcolor',
		},
	},
})

export const navItemHiddenUntilFocus = style({
	position: 'absolute',
	left: '-10000px',
	top: 'auto',
	width: '1px',
	height: '1px',
	overflow: 'hidden',
	':focus': {
		position: 'static',
		width: 'auto',
		height: pxToRem(44),
	},
})
