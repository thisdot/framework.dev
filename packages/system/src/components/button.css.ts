import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const buttonStyle = recipe({
	base: [
		sprinkles({
			fontWeight: "bold",
			fontSize: "small",
			borderRadius: 8,
		}),
		{
			display: "inline-block",
			cursor: "pointer",
		},
	],
	variants: {
		size: {
			small: sprinkles({
				paddingY: 8,
				paddingX: 10,
			}),
			medium: sprinkles({
				paddingY: 10,
				paddingX: 12,
			}),
		},
		color: {
			primary: sprinkles({
				color: "primaryButtonText",
				backgroundColor: "primary",
			}),
			destructive: sprinkles({
				color: "destructiveButtonText",
				backgroundColor: "destructiveAction",
			}),
		},
	},
	defaultVariants: {
		size: "medium",
		color: "primary",
	},
})
