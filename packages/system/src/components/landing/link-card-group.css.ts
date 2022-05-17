import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"

export const LinkCardGroupStyle = style([
	sprinkles({ gap: { mobile: 12, desktop: 24 } }),
	{
		display: "grid",
		gridAutoRows: "max-content",
		"@media": {
			[breakpoints.desktop]: {
				gridTemplateColumns: "repeat(auto-fit, minmax(192px, 1fr))",
			},
			[breakpoints.tablet]: {
				gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
			},
		},
	},
])

export const LinkCardGroupItemStyle = style([
	sprinkles({
		width: { mobile: "full", desktop: "auto" },
	}),
])
