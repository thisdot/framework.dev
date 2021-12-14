import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"

export const podcastsStyle = style([
	sprinkles({
		backgroundColor: "white",
		border: "thin",
		borderRadius: 12,
		display: "grid",
		gap: 8,
		paddingLeft: 16,
		paddingTop: 16,
	}),
	{
		gridTemplateAreas: `
			"text text"
			"podcast podcast"
			"podcast podcast"
		`,
		gridTemplateColumns: "repeat(2, 1fr)",
		gridTemplateRows: "repeat(3, auto)",
		overflow: "hidden",
		"@media": {
			[breakpoints.tablet]: {
				gridTemplateAreas: `
					"text text text text"
					"podcast podcast podcast podcast"
				`,
				gridTemplateColumns: "repeat(4, 1fr)",
				gridTemplateRows: "repeat(2, auto)",
			},
			[breakpoints.desktop]: {
				gridTemplateAreas: `
					"text text podcast podcast podcast podcast"
				`,
				gridTemplateColumns: "repeat(6, 1fr)",
				gridTemplateRows: "auto",
			},
		},
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
		},
	},
])
