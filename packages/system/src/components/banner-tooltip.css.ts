import { style } from '@vanilla-extract/css'
import { breakpoints, sprinkles } from '../sprinkles/sprinkles.css'
import { pxToRem } from '../util/style-utils'

export const bannerTooltipStyle = style([
	sprinkles({
		borderRadius: 40,
		backgroundColor: 'secondaryContainer',
		display: 'flex',
		gap: { tablet: 10, mobile: 32, desktop: 20 },
		flexDirection: { mobile: 'column', desktop: 'row' },
		paddingX: { mobile: 24, desktop: 0 },
		paddingTop: { mobile: 32, desktop: 0 },
	}),
	{
		position: 'relative',
		overflow: 'hidden',
		'@media': {
			[breakpoints.desktop]: {
				minHeight: 128,
			},
		},
	},
])

export const bannerTooltipHeadingStyle = style([
	sprinkles({
		color: 'regularText',
		textStyle: { desktop: 'h300', mobile: 'h200' },
		paddingLeft: { desktop: 48 },
		paddingY: { desktop: 32 },
	}),
	{
		textAlign: 'center',
		fontWeight: 'bold',
		lineHeight: pxToRem(24),
		'@media': {
			[breakpoints.desktop]: {
				maxWidth: pxToRem(550),
				textAlign: 'start',
				lineHeight: pxToRem(32),
			},
		},
	},
])

export const bannerTooltipHeadingSoftStyle = sprinkles({
	color: 'secondary',
})

export const bannerTooltipIconStyle = style([
	sprinkles({
		paddingTop: { desktop: 20 },
		display: 'grid',
	}),
	{
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: 'min-content',
		gap: 10,
		alignItems: 'center',
		'@media': {
			[breakpoints.tablet]: {
				width: '50%',
				margin: '0 auto',
			},
			[breakpoints.desktop]: {
				maxWidth: pxToRem(340),
				margin: 0,
				marginLeft: 'auto',
			},
		},
	},
])

export const bannerTooltipExplanatoryText = style([
	sprinkles({
		color: 'secondary',
		textStyle: 'bodyShort2',
		marginLeft: { desktop: 20 },
	}),
	{
		width: pxToRem(143),
		textAlign: 'center',
		justifySelf: 'end',
		'@media': {
			[breakpoints.tablet]: {
				justifySelf: 'start',
			},
		},
	},
])

export const bannerTooltipWavyArrowIcon = style([
	sprinkles({
		width: { tablet: 'auto' },
	}),
	{
		'@media': {
			[breakpoints.tablet]: {
				justifySelf: 'end',
				marginRight: pxToRem(24),
			},
			[breakpoints.desktop]: {
				width: pxToRem(130),
			},
		},
	},
])

export const bannerTooltipCardIcon = style({
	gridColumn: '1/3',
	alignSelf: 'end',
	justifySelf: 'center',
})

export const bannerTooltipCloseIcon = style({
	position: 'absolute',
	top: '5%',
	right: pxToRem(20),
	'@media': {
		[breakpoints.desktop]: {
			alignSelf: 'center',
			justifySelf: 'end',
			position: 'static',
			marginLeft: 'auto',
			marginRight: 32,
		},
	},
})
