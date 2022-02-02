import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const homepageStyle = style({ overflow: "auto" })

export const homepageContentContainerStyle = style([
	sprinkles({
		display: "grid",
	}),
	{
		gap: pxToRem(64),
		paddingTop: pxToRem(64),
		"@media": {
			[breakpoints.tablet]: {
				gap: pxToRem(96),
				paddingTop: pxToRem(96),
			},
			[breakpoints.desktop]: {
				gap: pxToRem(128),
				paddingTop: pxToRem(128),
			},
		},
	},
])

export const homepageGutterStyle = style([
	sprinkles({
		marginX: "auto",
		paddingX: {
			mobile: 16,
			desktop: 48,
		},
	}),
	{
		maxWidth: pxToRem(1200),
	},
])

export const homepageTwoAndOneSectionStyle = style([
	sprinkles({
		gap: 48,
		display: "grid",
	}),
	{
		gridTemplate: "repeat(2, auto) / 1fr",
		"@media": {
			[breakpoints.desktop]: {
				gridTemplate: "auto / 2fr 1fr",
			},
		},
	},
])
