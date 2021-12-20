import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"
import { vars } from "../../themes/themes.css"

export const heroStyle = style([
	sprinkles({
		borderRadius: 40,
		paddingX: 48,
	}),
	{
		backgroundColor: vars.palette.primary99,
		minHeight: pxToRem(480),
		paddingBottom: pxToRem(68),
		paddingTop: pxToRem(68),
	},
])

export const heroHeadingStyle = style({
	color: vars.themeColors.onSurface,
	fontSize: `min(calc(4vw + 1rem), ${pxToRem(88)})`,
	fontWeight: 700,
	lineHeight: 1,
	letterSpacing: "-0.02em",
})

export const heroParagraphStyle = style([
	sprinkles({
		textStyle: "bodyLong1",
	}),
])
