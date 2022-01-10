import { style } from "@vanilla-extract/css"
import { sprinkles, breakpoints } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { pxToRem } from "../../util/style-utils"
import {
	textInputBoxStyle,
	textInputContainerStyle,
	textInputLabelStyle,
} from "../text-input.css"

export const searchInputContainerStyle = style([
	textInputContainerStyle,
	{ position: "relative" },
])
export const searchInputLabelStyle = textInputLabelStyle
export const searchInputBoxStyle = style([
	textInputBoxStyle,
	{
		height: pxToRem(48),
		display: "grid",
		gridTemplateColumns: "min-content auto 1fr min-content",
		paddingRight: 0,
		":focus-within": {
			borderColor: vars.themeColors.tertiary,
		},
	},
	sprinkles({ gap: 4, paddingRight: 0 }),
])
export const searchInputInputStyle = style([
	sprinkles({ width: "full" }),
	{ lineHeight: pxToRem(48), ":focus-within": { outline: "none" } },
])
export const searchInputIconStyle = sprinkles({
	marginRight: { mobile: 6, desktop: 10 },
})
export const searchInputResetButtonStyle = style({
	fontSize: pxToRem(18),
	height: pxToRem(48),
	width: pxToRem(50),
	display: "grid",
	alignItems: "center",
	justifyItems: "center",
})

export const searchInputStaticPrefixStyle = style([
	sprinkles({ color: "softText" }),
	{
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		maxWidth: pxToRem(36),
		width: "fit-content",
		"@media": {
			[breakpoints.tablet]: {
				maxWidth: "100%",
			},
		},
	},
])
