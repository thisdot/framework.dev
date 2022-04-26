import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"

export const resourcesInfoBannerStyle = style([
	sprinkles({
		
		borderRadius: 12,
		layout: "stack",
		gap: 20,
		padding: { desktop: 56, mobile: 'auto' },
	}),
	{
		backgroundColor: vars.palette.neutralVariant99,
		// Put custom CSS here
	},
])

export const resourcesInfoBannerHeadingStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: "h400",
	}),
])

export const resourcesInfoBannerDescriptionStyle = style([
	sprinkles({
		color: "regularText",
		textStyle: "bodyLong1",
	}),
])

// export const contentBannerStyle = style([
// 	sprinkles({
// 		backgroundColor: "white",
// 		border: "thin",
// 		borderRadius: 12,
// 		display: "grid",
// 		gap: 8,
// 		padding: 24,
// 	}),
// 	{
// 		gridTemplateAreas: `
// 			"text text"
// 			"contentBanner contentBanner"
// 			"contentBanner contentBanner"
// 		`,
// 		gridTemplateColumns: "repeat(2, 1fr)",
// 		gridTemplateRows: "repeat(3, auto)",
// 		overflow: "hidden",
// 		"@media": {
// 			[breakpoints.tablet]: {
// 				gridTemplateAreas: `
// 					"text text text text"
// 					"contentBanner contentBanner contentBanner contentBanner"
// 				`,
// 				gridTemplateColumns: "repeat(4, 1fr)",
// 				gridTemplateRows: "repeat(2, auto)",
// 			},
// 			[breakpoints.desktop]: {
// 				gridTemplateAreas: `
// 					"text text contentBanner contentBanner contentBanner contentBanner"
// 				`,
// 				gridTemplateColumns: "repeat(6, 1fr)",
// 				gridTemplateRows: "auto",
// 			},
// 		},
// 		selectors: {
// 			"&:not(:hover)": {
// 				borderColor: "transparent",
// 			},
// 		},
// 	},
// ])
