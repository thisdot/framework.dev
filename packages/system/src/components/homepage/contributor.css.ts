import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { pxToRem } from '../../util/style-utils';

export const contributorImageStyle = style([
	sprinkles({ borderColor: 'onSecondaryContainer' }),
	{
		maxWidth: pxToRem(72),
		borderRadius: '50%',
		borderWidth: pxToRem(4),
		borderStyle: 'solid',
	},
]);
