import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { vars } from '../themes/themes.css';
import { pxToRem } from '../util/style-utils';

const base = style({
	height: 'var(--skeleton-height)',
	width: 'var(--skeleton-width)',
});

export const skeletonVariants = styleVariants({
	circle: [
		base,
		{
			borderRadius: '100%',
		},
	],

	text: [
		base,
		{
			borderRadius: pxToRem(5),
		},
	],
});

const skeletonLoading = keyframes({
	'0%': {
		backgroundColor: vars.palette.neutral60,
	},
	'100%': {
		backgroundColor: vars.palette.neutral40,
	},
});

export const skeletonAnimated = style({
	animation: `${skeletonLoading} 1s linear infinite alternate`,
});
