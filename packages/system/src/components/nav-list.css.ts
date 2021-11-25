import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const navListItemStyle = style([
	sprinkles({
		// Put sprinkles here
	}),
	{},
])

export const navListStyle = style([
	sprinkles({
		layout: "stack",
		gap: 2,
	}),
	{
		selectors: {
			[`${navListItemStyle} > &`]: {
				paddingLeft: pxToRem(12),
				display: "none",
			},
			[`${navListItemStyle} > a[aria-expanded="true"] + &`]: {
				display: "flex",
			},
		},
	},
])
