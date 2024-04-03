import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints, sprinkles } from '../../sprinkles/sprinkles.css';
import { pxToRem } from '../../util/style-utils';
import { vars } from '../../themes/themes.css';

export const heroContainerStyle = sprinkles({
	layout: 'stack',
	paddingY: { mobile: 24, tablet: 40, desktop: 64 },
	gap: {
		mobile: 24,
		desktop: 40,
	},
});

export const heroStyle = style([
	sprinkles({
		borderRadius: 40,
		backgroundColor: 'white',
		layout: 'stack',
		gap: 16,
		alignItems: 'center',
	}),
	{
		textAlign: 'center',
		position: 'relative',
		minHeight: pxToRem(424),
		paddingTop: pxToRem(40),
		'@media': {
			[breakpoints.tablet]: {
				paddingTop: pxToRem(96),
			},
		},
	},
]);

export const heroBackgroundStyle = style({
	position: 'absolute',
	bottom: 0,
	left: '50%',
	transform: 'translateX(-50%)',
	width: '522px',
	maxWidth: '100%',
});

const heroLinesBase = style([
	sprinkles({ display: { mobile: 'none', tablet: 'block' } }),
	{
		color: vars.palette.primary95,
		position: 'absolute',
		top: 0,
		bottom: 0,
	},
]);

export const heroLinesStyle = styleVariants({
	leftHandSide: [heroLinesBase, { left: 85 }],
	rightHandSide: [heroLinesBase, { right: 85 }],
});

export const heroHeadingStyle = style([
	sprinkles({
		paddingX: { mobile: 10 },
	}),
	{
		height: pxToRem(80),
		textAlign: 'center',
		position: 'relative',
	},
]);

export const heroParagraphStyle = style([
	sprinkles({
		textStyle: 'bodyLong1',
	}),
	{
		position: 'relative',
		'@media': {
			[breakpoints.tablet]: {
				fontSize: pxToRem(20),
				lineHeight: pxToRem(28),
			},
		},
	},
]);

export const heroFeatureHighlightRowStyle = style([
	sprinkles({
		gap: { mobile: 8, tablet: 24 },
	}),
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		'@media': {
			[breakpoints.tablet]: {
				gridTemplateColumns: '1fr 1fr 1fr',
			},
		},
	},
]);

export const heroFeatureHighlightStyle = style([
	sprinkles({
		border: 'thin',
		borderRadius: 40,
		padding: 24,
		backgroundColor: 'white',
		layout: { mobile: 'row', tablet: 'stack', desktop: 'row' },
		gap: { mobile: 16, desktop: 24 },
		alignItems: 'center',
	}),
	{
		selectors: {
			'&:not(:hover)': {
				borderColor: 'transparent',
			},
		},
	},
]);

export const heroFeatureHighlightTitleStyle = sprinkles({
	textStyle: 'bodyShort1',
	fontWeight: 'bold',
});

export const heroFeatureHighlightIconStyle = style({
	filter:
		'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2)) drop-shadow(0px 8px 17px rgba(0, 0, 0, 0.07)) drop-shadow(0px 2.92013px 6.20528px rgba(0, 0, 0, 0.0482987)) drop-shadow(0px 1.41767px 3.01255px rgba(0, 0, 0, 0.0389404)) drop-shadow(0px 0.694968px 1.47681px rgba(0, 0, 0, 0.0310596)) drop-shadow(0px 0.274791px 0.583932px rgba(0, 0, 0, 0.0217013))',
});
