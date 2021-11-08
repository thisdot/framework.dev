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
			transition: "background 0.15s ease-in-out, color 0.15s ease-in-out",
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
				":active": {
					backgroundColor: vars.palette.tertiary30,
				},
				":hover": {
					backgroundColor: vars.palette.tertiary50,
				},
				":disabled": {
					backgroundColor: vars.palette.neutral90,
					color: vars.palette.neutral70,
				},
			},
			secondary: {
				color: vars.themeColors.onSecondaryContainer,
				backgroundColor: vars.themeColors.secondaryContainer,
				":active": {
					backgroundColor: vars.palette.secondary70,
				},
				":hover": {
					backgroundColor: vars.palette.secondary80,
				},
				":disabled": {
					backgroundColor: vars.palette.neutral90,
					color: vars.palette.neutral70,
				},
			},
			tertiary: {
				color: vars.themeColors.onSurface,
				backgroundColor: vars.themeColors.surface,
				borderColor: vars.themeColors.tertiaryBorder,
				":active": {
					backgroundColor: vars.palette.neutral90,
				},
				":hover": {
					backgroundColor: vars.palette.neutralVariant99,
				},
				":disabled": {
					backgroundColor: vars.palette.neutral90,
					color: vars.palette.neutral70,
				},
			},
			plain: {
				color: vars.themeColors.tertiary,
				backgroundColor: vars.themeColors.onTertiary,
				":active": {
					backgroundColor: vars.palette.neutral90,
				},
				":hover": {
					backgroundColor: vars.palette.neutral99,
				},
				":disabled": {
					backgroundColor: vars.themeColors.onTertiary,
					color: vars.palette.neutral70,
				},
			},
			destructive: {
				color: vars.themeColors.onErrorContainer,
				backgroundColor: vars.themeColors.errorContainer,
				":active": {
					backgroundColor: vars.palette.error70,
				},
				":hover": {
					backgroundColor: vars.palette.error80,
				},
				":disabled": {
					backgroundColor: vars.palette.neutral90,
					color: vars.palette.neutral70,
				},
			},
		},
	},
	defaultVariants: {
		size: "medium",
		color: "primary",
	},
})
