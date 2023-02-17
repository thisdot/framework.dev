import { globalStyle, style } from '@vanilla-extract/css'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { vars } from '../../themes/themes.css'

globalStyle(':root', {
	vars: {
		'--reach-combobox': '1',
	},
})

export const searchAutocompletePopoverStyle = sprinkles({
	backgroundColor: 'white',
	textStyle: 'bodyShort2',
	borderX: 'thin',
	borderBottom: 'thin',
})

export const searchAutocompleteOptionStyle = style([
	sprinkles({
		paddingX: 12,
		paddingY: 4,
	}),
	{
		cursor: 'pointer',
		selectors: {
			'&[aria-selected="true"], &:hover': {
				backgroundColor: vars.themeColors.primaryContainer,
			},
		},
	},
])

globalStyle(`${searchAutocompleteOptionStyle} [data-suggested-value]`, {
	fontWeight: 600,
})
