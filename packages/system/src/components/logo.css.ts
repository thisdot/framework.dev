import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

export const logoStyle = sprinkles({
	layout: "row",
	gap: 10,
	alignItems: "center",
})
export const wordmarkStyle = sprinkles({
	layout: "stack",
	gap: 2,
	textStyle: "button",
	fontWeight: "bold",
})
export const sigilStyle = style([
	sprinkles({
		backgroundColor: "onSurface",
		color: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}),
	{
		width: 34,
		height: 34,
		borderRadius: "100%",
	},
])
export const logoTitleStyle = style({ color: vars.palette.logo })
export const logoAccentStyle = style({})
