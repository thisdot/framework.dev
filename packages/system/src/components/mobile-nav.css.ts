import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

export const mobileNavStyle = style([
	sprinkles({
		color: "strongText",
		paddingX: 16,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderTop: "thin",
	}),
	{
		backgroundColor: vars.palette.primary99,
		position: "relative",
		zIndex: 10,
	},
])

export const menuButtonStyle = style([
	sprinkles({
		fontWeight: "bold",
		textStyle: "clickable",
		color: "strongText",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	}),
])

export const mobileNavDialogStyle = style({
	maxHeight: "calc(100vh - 56px)",
	overflowY: "auto",
})
