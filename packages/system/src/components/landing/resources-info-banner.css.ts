import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const resourcesInfoBannerStyle = style([
	sprinkles({
		borderRadius: 12,
		layout: "stack",
		gap: 20,
		padding: { desktop: 56, mobile: "auto" },
	}),
	{
		"@media": {
			[breakpoints.desktop]: {
				backgroundColor: "var(--banner-background)",
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
		marginTop: { desktop: 20, mobile: 32 },
	}),
])
