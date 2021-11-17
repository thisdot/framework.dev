import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const mobileNavStyle = style([
	sprinkles({
		color: "strongText",
		backgroundColor: "surface",
		paddingX: 16,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	}),
	{
		height: pxToRem(64),
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
	}),
	{
		cursor: "pointer",
	},
])

export const burgerIconStyle = style([
	sprinkles({
		marginLeft: 10,
	}),
	{
		display: "block",
		width: pxToRem(14),
		height: pxToRem(9),
	},
])

export const menuCloseButtonStyle = style([
	sprinkles({
		border: "thin",
		backgroundColor: "surface",
		color: "softText",
		borderRadius: 8,
	}),
	{
		cursor: "pointer",
		position: "absolute",
		right: -16,
		top: 20,
		height: 32,
		width: 32,
		display: "grid",
		justifyContent: "center",
		alignContent: "center",
	},
])
