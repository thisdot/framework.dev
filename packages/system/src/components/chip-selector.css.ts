import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const chipSelectorStyle = style([
	sprinkles({
		textStyle: "caption",
		borderRadius: 8,
		border: "thin",
		backgroundColor: "surface",
		color: "onSurface",
		paddingX: 12,
	}),
	{
		height: pxToRem(32),
		display: "inline-flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
		cursor: "pointer",
		transition: "background 0.15s ease-in",
		selectors: {
			"input:not(:checked) + &:hover, input:not(:checked) + &:focus": {
				transition: "none",
				backgroundColor: vars.palette.neutral95,
			},
			"input:not(:checked) + &:active": {
				backgroundColor: vars.palette.neutral90,
			},
			"input:checked + &": {
				backgroundColor: vars.themeColors.secondaryContainer,
			},
		},
	},
])

export const chipSelectorIconStyle = style({
	height: pxToRem(10.5),
	width: pxToRem(10.5),
	overflow: "hidden",
	display: "grid",
	alignItems: "center",
	justifyItems: "center",
	selectors: {
		"&:after": {
			content: '""',
			clipPath: "polygon(10% 0, 0 10%, 40% 50%, 0 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%)",
			height: pxToRem(10.5),
			width: pxToRem(10.5),
			backgroundColor: "currentcolor",
			transform: "rotate(45deg) scale(1)",
			transition: "transform 0.15s ease-in-out",
		},
		"input:checked + label > &:after": {
			transform: "rotate(0deg) scale(1)",
		}
	}
	
})