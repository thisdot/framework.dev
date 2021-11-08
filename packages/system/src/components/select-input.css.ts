import { style } from "@vanilla-extract/css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"
import {
	textInputBoxStyle,
	textInputContainerStyle,
	textInputLabelStyle,
} from "./text-input.css"

export const selectInputContainerStyle = style([
	textInputContainerStyle,
	{
		position: "relative",
		"::after": {
			position: "absolute",
			bottom: pxToRem(17.75),
			right: pxToRem(21.25),
			content: "",
			width: pxToRem(7.5),
			height: pxToRem(4),
			backgroundColor: vars.themeColors.outline,
			clipPath: "polygon(100% 0%, 0 0%, 50% 100%)",
		},
	},
])

export const selectInputBoxStyle = textInputBoxStyle

export const selectInputLabelStyle = textInputLabelStyle
