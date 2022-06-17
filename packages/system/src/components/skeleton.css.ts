import { style, keyframes, styleVariants } from "@vanilla-extract/css"
import { pxToRem } from "../util/style-utils"

const base = style({
	height: "var(--skeleton-height)" || "auto",
	width: "var(--skeleton-width)" || "auto",
})

export const skeletonVariants = styleVariants({
	circle: [
		base,
		{
			borderRadius: "100%",
		},
	],

	text: [
		base,
		{
			borderRadius: pxToRem(5)
		},
	],
})

const skeletonLoading = keyframes({
	"0%": {
		backgroundColor: "lightgray",
	},
	"100%": {
		backgroundColor: "gray",
	},
})

export const skeletonAnimated = style({
	animation: `${skeletonLoading} 1s linear infinite alternate`,
})
