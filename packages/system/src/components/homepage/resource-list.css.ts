import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { pxToRem } from '../../util/style-utils';
import { vars } from '../../themes/themes.css';

export const resourceListStyle = style([
	sprinkles({
		display: 'grid',
	}),
	{
		gridTemplateRows: 'auto 1fr auto',
	},
]);

export const resourceListHeadingStyle = style([
	sprinkles({
		marginBottom: 16,
		textStyle: 'h100',
	}),
	{
		color: vars.palette.neutralVariant20,
	},
]);

export const resourceListListStyle = style([
	sprinkles({
		display: 'grid',
		gap: 12,
		marginBottom: 24,
	}),
	{
		alignItems: 'start',
		gridAutoFlow: 'row',
	},
]);

export const resourceListItemStyle = style([
	sprinkles({
		backgroundColor: 'white',
		border: 'thin',
		borderRadius: 12,
		display: 'grid',
		gap: 12,
		padding: 16,
	}),
	{
		alignContent: 'center',
		gridTemplateRows: 'repeat(2, auto)',
		overflow: 'hidden',
		selectors: {
			'&:not(:hover)': {
				borderColor: 'transparent',
			},
		},
	},
]);

export const resourceListItemHeaderStyle = style([
	sprinkles({
		gap: 12,
		layout: 'row',
	}),
]);

export const resourceListItemTitleStyle = style([
	sprinkles({
		color: 'strongText',
		marginBottom: 4,
		textStyle: 'bodyShort2',
	}),
]);

export const resourceListItemMetadataStyle = style([
	sprinkles({
		color: 'softText',
		textStyle: 'bodyShort3',
	}),
]);

export const resourceListItemImageStyle = style([
	sprinkles({ borderRadius: 8 }),
	{
		height: pxToRem(40),
		objectFit: 'cover',
		width: pxToRem(40),
	},
]);

export const resourceListItemDescriptionStyle = style([
	sprinkles({
		color: 'regularText',
		textStyle: 'bodyLong2',
	}),
	{
		margin: '12px 0',
	},
]);

export const resourceListViewAllStyle = sprinkles({
	color: 'tertiary',
	textStyle: 'button',
});
