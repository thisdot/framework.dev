import { style } from "@vanilla-extract/css"
import { pxToRem } from "../../util/style-utils"

export const titleFirstCardGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, 340px)",
	gridAutoRows: "max-content",
	gap: pxToRem(24),
})

export const imageFirstCardGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, 250px)",
	gridAutoRows: "max-content",
	gap: pxToRem(24),
})
