import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../sprinkles/sprinkles.css';

export const filterMenuStyle = style([
	sprinkles({ height: 'full', backgroundColor: 'white' }),
	{
		height: '100%',
		display: 'grid',
		gridTemplateRows: '1fr auto',
	},
]);

export const filterMenuFooterStyle = sprinkles({
	layout: 'row',
	justifyContent: 'flex-end',
	paddingY: { mobile: 8, desktop: 16 },
	paddingX: 16,
	gap: 8,
	backgroundColor: 'surface',
	borderTop: 'thin',
	alignItems: 'center',
});

export const filterMenuFilterContainerStyle = style([
	sprinkles({
		layout: 'stack',
		gap: 16,
		paddingY: 24,
	}),
	{
		overflowX: 'auto',
	},
]);
