import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export const searchStyle = style({
	display: "grid",
	gridTemplateRows: `1fr min-content`,
	gridTemplateColumns: `1fr`,
	height: "100%",
})

export const searchContainerStyle = style([
	sprinkles({
		layout: "stack",
		gap: 24,
		paddingTop: { mobile: 24, desktop: 16 },
	}),
	{ overflowY: "auto" },
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
		display: "grid",
		gridTemplateColumns: "1fr max-content max-content",
		justifyItems: "flex-start",
	},
])

export const searchMobileLogoContainerStyle = sprinkles({
	layout: "row",
	justifyContent: "center",
	display: { desktop: "none" },
})

export const searchMobileLogoStyle = style({
	transform: `scale(${7 / 6})`,
})
