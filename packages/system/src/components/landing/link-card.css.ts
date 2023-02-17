import { style } from '@vanilla-extract/css'
import { breakpoints, sprinkles } from '../../sprinkles/sprinkles.css'
import { pxToRem } from '../../util/style-utils'

export const linkCardStyle = style([
	sprinkles({
		layout: 'row',
		borderRadius: 12,
		alignItems: { desktop: 'start', mobile: 'center' },
		flexDirection: { desktop: 'column', mobile: 'row' },
		justifyContent: { desktop: 'space-between', mobile: 'flex-start' },
		paddingLeft: 16,
		paddingRight: { desktop: 16, mobile: 64 },
		paddingY: 16,
	}),
	{
		position: 'relative',
		backgroundColor: 'var(--card-background)',
		filter: 'brightness(100%)',
		overflow: 'hidden',
		'@media': {
			[breakpoints.desktop]: {
				gap: pxToRem(38),
			},
		},
		selectors: {
			'&.bigSize': {
				'@media': {
					[breakpoints.desktop]: {
						gap: pxToRem(100),
						alignItems: 'flex-start',
					},
				},
			},
			'&:before': {
				backgroundColor: 'var(--link-card-background)',
				content: "''",
				height: '100%',
				left: 0,
				position: 'absolute',
				top: 0,
				width: '100%',
				zIndex: -1,
			},
			'&:hover&:before': {
				filter: 'brightness(80%)',
			},
		},
	},
])

export const linkCardIndicatorIconStyle = style([
	sprinkles({
		height: 'auto',
	}),
	{
		color: 'var(--link-card-color-theme)',
		pointerEvents: 'none',
		position: 'absolute',
		right: pxToRem(20),
		top: '50%',
		transform: 'translateY(-50%)',
		width: pxToRem(28),
		'@media': {
			[breakpoints.desktop]: {
				right: pxToRem(16),
				top: pxToRem(16),
				transform: 'none',
			},
		},
	},
])

export const linkCardIconContainerStyle = style([
	sprinkles({
		backgroundColor: 'white',
		borderRadius: { desktop: 56, mobile: 48 },
		display: 'block',
		marginRight: 16,
	}),
	{
		height: pxToRem(56),
		position: 'relative',
		width: pxToRem(56),
	},
])

export const linkCardRawIconContainerStyle = style([
	{
		marginRight: 16,
		height: pxToRem(56),
		position: 'relative',
		width: pxToRem(56),
	},
])

export const linkCardIconStyle = style([
	sprinkles({
		height: 'auto',
	}),
	{
		left: '50%',
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: '50%',
		maxWidth: '50%',
	},
])

export const linkCardTitleStyle = style([
	sprinkles({
		textStyle: { desktop: 'h100', mobile: 'h100' },
		width: { desktop: 'full', mobile: 'auto' },
	}),
	{
		color: 'var(--link-card-color-theme)',
	},
])
