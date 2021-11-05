import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const buttonStyle = recipe({
	base: [
		sprinkles({
			textStyle: "button",
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
				borderRadius: 8,
				paddingY: 8,
				paddingX: 12,
			}),
			medium: sprinkles({
				borderRadius: 12,
				paddingY: 12,
				paddingX: 20,
			}),
			large: sprinkles({
				borderRadius: 12,
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
