import { style } from "@vanilla-extract/css"
import { breakpoints } from "../sprinkles/sprinkles.css"

export const bodyWithNav = style({
	display: "grid",
	gridTemplateRows: "1fr 56px",
	"@media": {
		[breakpoints.desktop]: {
			gridTemplateColumns: "240px 1fr",
		},
	},
})

export const shrinkable = style({ minHeight: 0 })

export const fullscreen = style({
	height: "100vh"
})
