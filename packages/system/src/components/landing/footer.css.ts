import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export const footerStyle = style([
	sprinkles({
		layout: { desktop: "row", mobile: "stack" },
		justifyContent: { desktop: "space-between", mobile: "center" },
		alignItems: "center",
		gap: { desktop: 0, mobile: 16 },
		paddingY: 56,
	}),
	{
		backgroundColor: "white",
	},
])

export const footerLinkStyle = style([
	sprinkles({
		layout: "row",
		gap: 14,
		alignItems: "center",
		fontWeight: "bold",
		textStyle: "bodyShort2",
	}),
])

export const footerSponsorIconContainerStyle = style({
	display: "flex",
	alignItems: "center",
	gap: 12,
})
