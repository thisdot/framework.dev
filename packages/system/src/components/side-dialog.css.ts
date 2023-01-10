import { recipe } from "@vanilla-extract/recipes"
import type { VariantSelection } from "@framework/system/src/util/type-utils"
import { breakpoints, sprinkles } from "../sprinkles/sprinkles.css"

const dialogOverlayVariants = {
	state: {
		open: {
			background: "hsla(0, 0%, 0%, 0.66)",
		},
		closed: {
			background: "hsla(0, 0%, 0%, 0)",
			pointerEvents: "none",
		},
	},
} as const

export type DialogOverlayVariants = VariantSelection<
	typeof dialogOverlayVariants
>

export const dialogOverlayStyle = recipe({
	base: {
		position: "fixed",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		overflow: "auto",
		transitionProperty: "background",
		transitionDuration: "200ms",
		transitionTimingFunction: "ease-out",
	},
	variants: dialogOverlayVariants,
})

const dialogContentVariants = {
	state: {
		open: {
			transform: "translate3d(0, 0, 0)",
			transitionTimingFunction: "ease-out",
		},
		closed: {
			transitionTimingFunction: "ease-out",
		},
	},
	position: {
		bottom: {
			bottom: 56,
			width: "100%",
		},
		right: {
			top: 0,
			right: 0,
			width: "304px",
			height: "100%",
			"@media": {
				[breakpoints.tablet]: {
					width: "320px",
				},
			},
		},
	},
} as const

export type DialogContentVariants = VariantSelection<
	typeof dialogContentVariants
>

export const dialogContentStyle = recipe({
	base: [
		sprinkles({
			display: "block",
			backgroundColor: "surface",
		}),
		{
			transitionProperty: "transform",
			transitionDuration: "200ms",
			position: "fixed",
		},
	],
	variants: dialogContentVariants,
	compoundVariants: [
		{
			variants: {
				state: "closed",
				position: "bottom",
			},
			style: {
				transform: "translate3d(0, 100%, 0)",
			},
		},
		{
			variants: {
				state: "closed",
				position: "right",
			},
			style: {
				transform: "translate3d(100%, 0, 0)",
			},
		},
	],
})
