import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"

const base = style([
	sprinkles({ gap: { mobile: 12, desktop: 24 } }),
	{
		display: "grid",
		gridAutoRows: "max-content",
		gridTemplateColumns: "1fr",
	},
])

export const titleFirstCardGrid = style([
	base,
	{
		"@media": {
			[breakpoints.desktop]: {
				gridTemplateColumns: "repeat(auto-fit, 340px)",
			},
		},
	},
])

export const imageFirstCardGrid = style([
	base,
	{
		"@media": {
			[breakpoints.desktop]: {
				gridTemplateColumns: "repeat(auto-fit, 250px)",
			},
		},
	},
])
