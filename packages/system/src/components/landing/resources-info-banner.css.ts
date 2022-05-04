import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { pxToRem } from "../../util/style-utils"

export const resourcesInfoBannerStyle = style([
	sprinkles({
		borderRadius: 12,
		layout: "stack",
		gap: 20,
		paddingY: { desktop: 56, mobile: "auto" },
		paddingX: { mobile: 16, desktop: 56 },
	}),
	{
		margin: "0 auto",
		maxWidth: pxToRem(1080),
		"@media": {
			[breakpoints.desktop]: {
				backgroundColor: vars.palette.neutralVariant99,
			},
		},
	},
])

export const resourcesInfoBannerHeadingStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: { desktop: "h400", mobile: "h300" },
	}),
])

export const resourcesInfoBannerDescriptionStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: "bodyLong1",
	}),
	{
		maxWidth: pxToRem(436),
	},
])

export const resourcesInfoBannerCardsStyle = style([
	sprinkles({
		marginTop: { desktop: 48, mobile: 32 },
	}),
	{
		"@media": {
			[breakpoints.desktop]: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(192px, 1fr))",
			},
		},
	},
])
