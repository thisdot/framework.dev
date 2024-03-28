import { style } from '@vanilla-extract/css';
import { vars } from '../themes/themes.css';
import { pxToRem } from '../util/style-utils';

export const cardDividerStyle = style({
	backgroundColor: vars.palette.neutral95,
	height: pxToRem(1),
	flexShrink: 0,
});
