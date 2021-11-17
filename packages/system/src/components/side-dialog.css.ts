import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { breakpoints, sprinkles } from "../sprinkles/sprinkles.css"

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
			display: "block",
			backgroundColor: "surface",
		}),
		{
			transitionProperty: "transform",
			transitionDuration: "200ms",
			position: "fixed",
			top: 0,
			width: "240px",
			height: "100%",
			'@media': {
				[breakpoints.tablet]: {
					width: "320px",
				}
			},
		},
	],
	variants: {
		state: {
			open: {
				transform: "translateX(0)",
				transitionTimingFunction: "ease-out",
			},
			opening: {
				transitionTimingFunction: "ease-out",
			},
			closed: {},
		},
		position: {
			left: {
				left: 0,
			},
			right: {
				right: 0,
			},
		},
	},
	compoundVariants: [
		{
			variants: {
				state: "opening",
				position: "left",
			},
			style: {
				transform: "translateX(-240px)",
			},
		},
		{
			variants: {
				state: "opening",
				position: "right",
			},
			style: {
				transform: "translateX(240px)",
			},
		},
	],
})
