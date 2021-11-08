import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
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
			":disabled": {
				cursor: "not-allowed",
			},
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
			primary: {
				color: vars.themeColors.onTertiary,
				backgroundColor: vars.themeColors.tertiary,
			},
			secondary: {
				color: vars.themeColors.onSecondaryContainer,
				backgroundColor: vars.themeColors.secondaryContainer,
			},
			tertiary: {
				color: vars.themeColors.onSurface,
				backgroundColor: vars.themeColors.surface,
				borderColor: vars.themeColors.tertiaryBorder,
			},

			plain: {
				color: vars.themeColors.tertiary,
				backgroundColor: vars.themeColors.onTertiary,
			},
			destructive: {
				color: vars.themeColors.onErrorContainer,
				backgroundColor: vars.themeColors.errorContainer,
			},
		},
	},
	defaultVariants: {
		size: "medium",
		color: "primary",
	},
})
