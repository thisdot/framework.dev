import { style } from '@vanilla-extract/css';
import { sprinkles } from '../sprinkles/sprinkles.css';
import { vars } from '../themes/themes.css';

export const tagContainerStyle = style([
	sprinkles({
		paddingY: 4,
		paddingX: 8,
		borderRadius: 6,
		textStyle: 'buttonSmall',
		color: 'onSurface',
	}),
	{
		cursor: 'pointer',
		backgroundColor: vars.palette.neutral95,
		transition: 'background 0.15s ease-in',
		selectors: {
			'&:hover, &:focus': {
				backgroundColor: vars.palette.neutral90,
				transition: 'none',
			},
		},
	},
]);

export const tagTextStyle = style([
	sprinkles({
		textStyle: 'buttonSmall',
		color: 'onSurface',
	}),
	{
		opacity: 0.6,
		transition: 'opacity 0.15s ease-in',
		':hover': {
			opacity: 0.75,
			transition: 'none',
		},
	},
]);
