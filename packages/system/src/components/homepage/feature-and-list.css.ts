import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
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
		gridTemplateAreas: `
			"feature"
			"list"
		`,
		overflow: "hidden",
		"@media": {
			[breakpoints.desktop]: {
				gridTemplateAreas: "feature feature list",
				gridTemplateColumns: "3fr 2fr",
			},
		},
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
		},
	},
])

export const featureAndListFeaturedStyle = style([
	sprinkles({
		borderRight: "light",
		paddingRight: {
			mobile: 0,
			desktop: 24,
		},
	}),
	{ gridArea: "feature" },
])

export const featureAndListFeatureImageStyle = sprinkles({
	marginBottom: 12,
	width: "full",
})

export const featureAndListFeatureTitleStyle = style([
	sprinkles({
		color: "strongText",
		marginBottom: 4,
		textStyle: "bodyShort1",
	}),
	{
		fontWeight: 600,
	},
])

export const featureAndListMetadataStyle = style([
	sprinkles({
		color: "softText",
		marginBottom: 12,
		textStyle: "bodyShort3",
	}),
])

export const featureAndListFeatureAttributesStyle = sprinkles({
	gap: 16,
	layout: "row",
	marginBottom: 12,
})

export const featureAndListFeatureDescription = style([
	sprinkles({
		color: "regularText",
		textStyle: "bodyLong2",
	}),
])

export const featureAndListListStyle = style({ gridArea: "list" })

export const featureAndListViewAllStyle = sprinkles({
	color: "tertiary",
	textStyle: "button",
})
