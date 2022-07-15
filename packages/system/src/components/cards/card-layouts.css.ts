import { style } from '@vanilla-extract/css'
import { breakpoints, sprinkles } from '../../sprinkles/sprinkles.css'

const base = style([
	sprinkles({ gap: { mobile: 12, desktop: 24 } }),
	{
		display: 'grid',
		gridAutoRows: 'max-content',
	},
])

export const titleFirstCardGrid = style([
	base,
	{
		gridTemplateColumns: 'repeat(auto-fit, 1fr)',
		'@media': {
			[breakpoints.tablet]: {
				gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
			},
		},
	},
])

export const imageFirstCardGrid = style([
	base,
	{
		gridTemplateColumns: '1fr',
		'@media': {
			[breakpoints.tablet]: {
				gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
			},
		},
	},
])
