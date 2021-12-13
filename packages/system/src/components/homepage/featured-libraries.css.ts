import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { breakpoints } from "../../sprinkles/sprinkles.css"

export const featuredLibrariesStyle = style([
	sprinkles({
		// Put sprinkles here
	}),
	{
		// Put custom CSS here
	},
])

export const featuredLibrariesHeadingStyle = style([
	sprinkles({
		marginBottom: 16,
		textStyle: "h100",
	}),
	{
		color: vars.palette.neutralVariant20,
	},
])

export const featuredLibrariesListStyle = style([
	sprinkles({
		display: "grid",
		gap: 24,
		marginBottom: 24,
	}),
	{
		gridTemplateColumns: "1fr",
		gridTemplateAreas: `
			"compare"
			"compare"
			"cards"
			"cards"
			"cards"
			"cards"
		`,
		"@media": {
			[breakpoints.tablet]: {
				gridTemplateColumns: "repeat(2, 1fr)",
				gridTemplateAreas: `
				"compare cards"
				"compare cards"
				"filler filler"
				`,
			},
			[breakpoints.desktop]: {
				gridTemplateColumns: "repeat(3, 1fr)",
				gridTemplateAreas: `
				"cards cards compare"
				"cards cards compare"
			`,
			},
		},
	},
])

export const featuredLibrariesViewAllStyle = sprinkles({
	color: "tertiary",
	textStyle: "button",
})
