import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const textInputContainerStyle = style([
	sprinkles({
		layout: "stack",
		gap: 4,
	}),
	{
		flexDirection: "column-reverse",
	},
])

export const textInputLabelStyle = style([
	sprinkles({
		color: "onSurface",
		textStyle: "caption",
	}),
	{
		selectors: {
			"*:disabled + &": {
				opacity: 0.5,
			},
		},
	},
])

export const textInputBoxStyle = style([
	sprinkles({
		backgroundColor: "surface",
		borderRadius: 12,
		paddingX: 16,
		color: "onSurface",
		border: "thin",
		textStyle: "caption",
		display: "grid",
		alignItems: "center",
	}),
	{
		borderColor: vars.palette.neutral80,
		height: pxToRem(40),
		":focus": {
			borderColor: vars.themeColors.tertiary,
		},
		":focus-visible": {
			outline: "none",
		},
		":disabled": {
			opacity: 0.5,
		},
		selectors: {
			'&:not(:placeholder-shown):not(:focus):not([value=""]):not(:focus-within)': {
				borderColor: vars.themeColors.outline,
			},
		},
	},
])
