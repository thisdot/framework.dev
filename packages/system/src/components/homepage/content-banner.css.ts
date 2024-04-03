import { style } from '@vanilla-extract/css';
import { breakpoints, sprinkles } from '../../sprinkles/sprinkles.css';

export const contentBannerStyle = style([
	sprinkles({
		backgroundColor: 'white',
		border: 'thin',
		borderRadius: 12,
		display: 'grid',
		gap: 8,
		padding: 24,
	}),
	{
		gridTemplateAreas: `
			"text text"
			"contentBanner contentBanner"
			"contentBanner contentBanner"
		`,
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(3, auto)',
		overflow: 'hidden',
		'@media': {
			[breakpoints.tablet]: {
				gridTemplateAreas: `
					"text text text text"
					"contentBanner contentBanner contentBanner contentBanner"
				`,
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridTemplateRows: 'repeat(2, auto)',
			},
			[breakpoints.desktop]: {
				gridTemplateAreas: `
					"text text contentBanner contentBanner contentBanner contentBanner"
				`,
				gridTemplateColumns: 'repeat(6, 1fr)',
				gridTemplateRows: 'auto',
			},
		},
		selectors: {
			'&:not(:hover)': {
				borderColor: 'transparent',
			},
		},
	},
]);

export const contentBannerTextAreaStyle = style([
	sprinkles({
		display: 'grid',
		gap: 16,
	}),
	{
		gridArea: 'text',
		gridTemplateRows: '1fr auto',
	},
]);

export const contentBannerHeadingStyle = style([
	sprinkles({
		color: 'regularText',
		textStyle: 'h200',
	}),
]);

export const contentBannersViewAllStyle = sprinkles({
	color: 'tertiary',
	textStyle: 'button',
});

export const contentBannerCardImageStyle = style([
	sprinkles({ borderRadius: 8, marginBottom: 16 }),
	{
		aspectRatio: '1 / 1',
		width: '100%',
	},
]);

export const contentBannerTitleStyle = style([
	sprinkles({
		color: 'regularText',
		marginBottom: 4,
		textStyle: 'bodyShort2',
	}),
	{
		fontWeight: 600,
	},
]);

export const contentBannerHostStyle = sprinkles({
	color: 'softText',
	textStyle: 'bodyShort3',
});
