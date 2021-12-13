import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"

export const comparisonBoxStyle = style([
	sprinkles({
		backgroundColor: "white",
		border: "thin",
		borderRadius: 12,
		display: "grid",
		paddingLeft: 16,
		paddingTop: 16,
	}),
	{
		gridTemplateRows: "1fr repeat(2, auto) 1fr",
		overflow: "hidden",
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
		},
	},
])

export const comparisonBoxHeadingStyle = sprinkles({
	color: "regularText",
	paddingRight: 16,
	textStyle: "h200",
})

export const comparisonBoxHeadingSoftStyle = sprinkles({
	color: "softText",
	paddingRight: 16,
})

export const comparisonBoxWhichLibsStyle = style([
	sprinkles({
		marginBottom: 12,
		paddingRight: 16,
		textStyle: "bodyShort2",
	}),
	{
		color: vars.palette.neutralVariant20,
	},
])

export const comparisonBoxImageStyle = style({
	alignSelf: "end",
})
