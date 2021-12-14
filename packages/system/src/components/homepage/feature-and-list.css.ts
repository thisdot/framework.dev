import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"

export const featureAndListStyle = style([
	sprinkles({
		// Put sprinkles here
	}),
	{
		// Put custom CSS here
	},
])

export const featureAndListHeadingStyle = style([
	sprinkles({
		marginBottom: 16,
		textStyle: "h100",
	}),
	{
		color: vars.palette.neutralVariant20,
	},
])

export const featureAndListBoxStyle = style([
	sprinkles({
		backgroundColor: "white",
		border: "thin",
		borderRadius: 12,
		display: "grid",
		marginBottom: 24,
		padding: 24,
	}),
	{
		overflow: "hidden",
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
		},
	},
])

export const featureAndListFeaturedStyle = style({})

export const featureAndListListStyle = style({})

export const featureAndListViewAllStyle = sprinkles({
	color: "tertiary",
	textStyle: "button",
})
