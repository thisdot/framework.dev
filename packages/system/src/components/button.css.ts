import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { reactColorPalette } from "../themes/react-color-scheme"
import { pxToRem } from "../util/style-utils"

export const buttonStyle = recipe({
	base: [
		sprinkles({
			textStyle: "button",
		}),
		{
			borderColor: "transparent",
			borderStyle: "solid",
			borderWidth: pxToRem(1),
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
				color: "onTertiary",
				backgroundColor: "tertiary",
			}),
			secondary: sprinkles({
				color: "onSecondaryContainer",
				backgroundColor: "secondaryContainer",
			}),
			tertiary: [
				sprinkles({
					color: "onSurface",
					backgroundColor: "surface",
				}),
				{
					borderColor: reactColorPalette.neutral80,
				},
			],
			plain: sprinkles({
				color: "tertiary",
				backgroundColor: "onTertiary",
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
