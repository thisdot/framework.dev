import { style } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const searchStyle = style([
	sprinkles({
		layout: "stack",
	}),
	{
		height: "100%",
		position: "relative",
	},
])

export const searchContainerStyle = style([
	sprinkles({
		layout: "stack",
		gap: 24,
		paddingBottom: { mobile: 56, desktop: 0 },
		paddingTop: { mobile: 0, desktop: 16 },
	}),
	{
		overflowY: "auto",
	},
])

export const compareBarStyle = style([
	sprinkles({
		backgroundColor: "surface",
		borderTop: "thin",
		paddingX: { mobile: 16, desktop: 64 },
		paddingY: { mobile: 8, desktop: 12 },
		gap: 8,
	}),
	{
		bottom: pxToRem(56),
		display: "grid",
		gridTemplateColumns: "1fr max-content max-content",
		justifyItems: "flex-start",
		position: "sticky",
		"@media": {
			[breakpoints.desktop]: {
				bottom: 0,
			},
		},
	},
])
