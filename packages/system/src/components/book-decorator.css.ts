import { style } from '@vanilla-extract/css';
import { pxToRem } from '../util/style-utils';

export const bookDecoratorStyle = style({
	height: 'min-content',
	position: 'relative',
	overflow: 'hidden',
	borderRadius: pxToRem(2),
	'::before': {
		content: '',
		height: '100%',
		width: pxToRem(1.5),
		opacity: 0.25,
		background: 'black',
		position: 'absolute',
		left: 0,
		top: 0,
	},
	'::after': {
		content: '',
		height: '100%',
		position: 'absolute',
		width: '4.5px',
		left: '1.5px',
		top: '0%',
		background:
			'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.15) 100%)',
		opacity: '0.6',
	},
});
