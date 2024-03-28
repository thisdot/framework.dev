import { globalStyle, style } from '@vanilla-extract/css';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { vars } from '../../themes/themes.css';
import { pxToRem } from '../../util/style-utils';

globalStyle(':root', {
	vars: {
		'--reach-combobox': '1',
	},
});

export const tagFilterStyle = sprinkles({ paddingX: 16, paddingY: 12 });

export const tagFilterTitleStyle = sprinkles({
	textStyle: 'caption',
	color: 'softText',
});

export const tagFilterBodyStyle = sprinkles({ layout: 'stack', gap: 16 });

export const tagFilterSearchStyle = style([
	sprinkles({ padding: 0 }),
	{
		selectors: {
			'[data-reach-combobox]:not([data-state="idle"]) + &': {
				display: 'none',
			},
		},
	},
]);

export const tagFilterSearchTitleStyle = sprinkles({
	textStyle: 'overline',
	color: 'softText',
	paddingBottom: 8,
});

export const tagFilterSearchBodyStyle = sprinkles({
	layout: 'row',
	gap: 4,
	flexWrap: 'wrap',
});

export const tagFilterListboxStyle = style([
	sprinkles({ paddingTop: 16 }),
	{ marginLeft: pxToRem(-16), marginRight: pxToRem(-16) },
]);

export const tagFilterListboxOptionStyle = style([
	sprinkles({ paddingX: 16, paddingY: 12, textStyle: 'bodyShort2' }),
	{
		cursor: 'pointer',
		selectors: {
			'&[data-highlighted], &:hover': {
				background: vars.themeColors.primaryContainer,
			},
		},
	},
]);
