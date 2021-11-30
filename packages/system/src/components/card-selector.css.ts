import { style } from "@vanilla-extract/css"
import { derivedAttributes } from "../themes/themes.css"

export const cardSelectorLabelStyle = style({
	cursor: "pointer",
	selectors: {
		"input:focus-visible + &": {
			outline: derivedAttributes.outline,
		},
	},
})
