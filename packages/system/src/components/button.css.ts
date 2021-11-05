import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const buttonStyle = recipe({
	base: [
		sprinkles({
			textStyle: "clickable",
			borderRadius: 8,
		}),
		{
			display: "inline-grid",
			justifyContent: "center",
			alignContent: "center",
			cursor: "pointer",
		},
	],
	variants: {
		size: {
			small: sprinkles({
				paddingY: 8,
				paddingX: 12,
			}),
			medium: sprinkles({
				paddingY: 12,
				paddingX: 20,
			}),
			large: sprinkles({
				paddingY: 16,
				paddingX: 24,
			}),
		},
		color: {
			primary: sprinkles({
				color: "onPrimaryContainer",
				backgroundColor: "primaryContainer",
			}),
			destructive: sprinkles({
				color: "onErrorContainer",
				backgroundColor: "errorContainer",
			}),
		},
	},
	defaultVariants: {
		size: "medium",
		color: "primary",
	},
})
