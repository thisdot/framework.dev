import { style } from '@vanilla-extract/css'
import { breakpoints, sprinkles, borders } from '../../sprinkles/sprinkles.css'
import { vars } from '../../themes/themes.css'
import { pxToRem } from '../../util/style-utils'

export const featureAndListStyle = style([
	sprinkles({
		// Put sprinkles here
	}),
	{
		// Put custom CSS here
	},
])

export const featureAndListHeadingStyle = style([
	sprinkles({
		marginBottom: 16,
		textStyle: 'h100',
	}),
	{
		color: vars.palette.neutralVariant20,
	},
])

export const featureAndListBoxStyle = style([
	sprinkles({
		backgroundColor: 'white',
		border: 'thin',
		borderRadius: 12,
		display: 'grid',
		marginBottom: 24,
		padding: 24,
	}),
	{
		gap: pxToRem(24),
		gridAutoColumns: '1fr',
		gridTemplateRows: 'repeat(2, auto)',
		overflow: 'hidden',
		'@media': {
			[breakpoints.desktop]: {
				gridTemplateColumns: '3fr 2fr',
				gridTemplateRows: 'auto',
			},
		},
		selectors: {
			'&:not(:hover)': {
				borderColor: 'transparent',
			},
		},
	},
])

export const featureAndListFeaturedStyle = style([
	sprinkles({
		paddingBottom: {
			mobile: 24,
			desktop: 0,
		},
		paddingRight: {
			mobile: 0,
			desktop: 24,
		},
	}),
	{
		borderBottom: borders.light,
		borderRight: 'none',
		'@media': {
			[breakpoints.desktop]: {
				borderBottom: 'none',
				borderRight: borders.light,
			},
		},
	},
])

export const featureAndListFeatureImageStyle = sprinkles({
	borderRadius: 8,
	marginBottom: 12,
	width: 'full',
})

export const featureAndListFeatureBookContainerStyle = style([
	sprinkles({
		borderRadius: 8,
		display: 'grid',
		marginBottom: 12,
		padding: 12,
		width: 'full',
	}),
	{
		backgroundColor: vars.palette.neutral95,
		placeItems: 'center',
	},
])

export const featureAndListFeatureBookStyle = style({
	filter: `
	drop-shadow(0px 8px 31px rgba(0, 0, 0, 0.13))
	drop-shadow(0px 1.00172px 3.88168px rgba(0, 0, 0, 0.065))`,
})

export const featureAndListFeatureTitleStyle = style([
	sprinkles({
		color: 'strongText',
		marginBottom: 4,
		textStyle: 'bodyShort1',
	}),
	{
		fontWeight: 600,
	},
])

export const featureAndListMetadataStyle = style([
	sprinkles({
		color: 'softText',
		marginBottom: 12,
		textStyle: 'bodyShort3',
	}),
])

export const featureAndListFeatureAttributesStyle = sprinkles({
	gap: 16,
	layout: 'row',
	marginBottom: 12,
})

export const featureAndListFeatureDescription = style([
	sprinkles({
		color: 'regularText',
		textStyle: 'bodyLong2',
	}),
])

export const featureAndListListStyle = sprinkles({
	gap: 24,
	layout: 'stack',
})

export const featureAndListListItemStyle = style([
	sprinkles({
		display: 'grid',
		gap: 12,
	}),
	{
		gridTemplateColumns: `${pxToRem(32)} 1fr`,
	},
])

export const featureAndListListImageStyle = style([
	sprinkles({ borderRadius: 8 }),
	{
		height: pxToRem(32),
		objectFit: 'cover',
		width: pxToRem(32),
	},
])

export const featureAndListListBookStyle = style({
	filter: `
		drop-shadow(0px 8px 31px rgba(0, 0, 0, 0.13))
		drop-shadow(0px 1.00172px 3.88168px rgba(0, 0, 0, 0.065))`,
	height: pxToRem(48),
	objectFit: 'contain',
	width: pxToRem(32),
})

export const featureAndListListTitleStyle = style([
	sprinkles({
		color: 'strongText',
		textStyle: 'bodyShort2',
	}),
	{
		fontWeight: 600,
	},
])

export const featureAndListListMetadataStyle = style([
	sprinkles({
		color: 'softText',
		gap: 12,
		layout: 'row',
		marginBottom: 12,
		textStyle: 'bodyShort3',
	}),
	{
		alignItems: 'center',
	},
])

export const featureAndListViewAllStyle = sprinkles({
	color: 'tertiary',
	textStyle: 'button',
})
