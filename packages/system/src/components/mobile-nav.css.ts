import { recipe } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"
import { themeColors } from "../themes/themes.css"

export const mobileNavStyle = style([
	sprinkles({
		color: "strongText",
		backgroundColor: "highlight",
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
		fontSize: "small",
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

export const dialogOverlayStyle = style({
	background: "hsla(0, 0%, 0%, 0.66)",
	position: "fixed",
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	overflow: "auto",
})

export const dialogContentStyle = recipe({
	base: [
		sprinkles({
			color: "regularText",
			backgroundColor: "highlight",
			display: "block",
		}),
		{
			transitionProperty: "transform",
			transitionDuration: "200ms",
			position: "fixed",
			left: 0,
			top: 0,
			width: "240px",
			height: "100%",
		},
	],
	variants: {
		state: {
			open: {
				transform: "translateX(0)",
				transitionTimingFunction: "ease-out",
			},
			opening: {
				transform: "translateX(-240px)",
				transitionTimingFunction: "ease-out",
			},
			closed: {},
		},
	},
})

export const menuHeaderStyle = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		paddingX: 24,
		color: "strongText",
		borderBottom: "thin",
	}),
	{
		height: pxToRem(72),
		boxShadow:
			"0px 4px 8px rgba(0, 0, 0, 0.02), inset 0px -1px 0px rgba(0, 0, 0, 0.08)",
	},
])

export const menuBodyStyle = sprinkles({ padding: 24 })

export const menuCloseButtonStyle = style([
	sprinkles({ border: "thin", color: "regularText", borderRadius: 8 }),
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
		color: themeColors.gray600,
	},
])
