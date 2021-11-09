import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const sidebarStyle = style([
	sprinkles({
		backgroundColor: "surface",
		borderRight: "thin",
	}),
	{ height: "100%" },
])

export const sidebarHeaderStyle = style([
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

export const sidebarBodyStyle = sprinkles({ padding: 12, color: "regularText" })
