import { style } from '@vanilla-extract/css'
import { sprinkles } from '../sprinkles/sprinkles.css'
import { vars } from '../themes/themes.css'
import { pxToRem } from '../util/style-utils'

export const sidebarStyle = style([
	sprinkles({
		backgroundColor: 'white',
		borderRight: 'thin',
		display: { mobile: 'none', desktop: 'block' },
	}),
	{
		position: 'relative',
	},
])

export const sidebarContentsStyle = style([
	sprinkles({
		display: 'grid',
	}),
	{
		gridTemplateRows: 'auto 1fr auto',
		height: '100vh',
		overflow: 'auto',
		position: 'sticky',
		top: 0,
	},
])

export const sidebarHeaderStyle = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		paddingX: 24,
		color: 'strongText',
	}),
	{
		backgroundColor: vars.palette.primary99,
		height: pxToRem(72),
	},
])

export const sidebarBodyStyle = sprinkles({ padding: 12, color: 'regularText' })
