import { style } from "@vanilla-extract/css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const checkboxLabelStyle = style({
	selectors: {
		/** container and label */
		'[type="checkbox"]:not(:checked) + &, [type="checkbox"]:checked + &': {
			position: "relative",
			paddingLeft: pxToRem(12 + 24),
			lineHeight: 1.24,
			cursor: "pointer",
			display: "flex",
			alignItems: "center",
			minHeight: pxToRem(24),
		},

		/* checkbox box */
		"&:before": {
			content: '""',
			position: "absolute",
			left: "0",
			top: "0",
			width: pxToRem(24),
			height: pxToRem(24),
			border: `1px solid ${vars.palette.neutral80}`,
			background: vars.palette.neutral100,
			borderRadius: pxToRem(8),
			transform: "scale(1)",
			transition: "background 0.15s ease-in-out, transform 0.05s ease-in-out",
		},

		"&:active:before": {
			transform: "scale(1.05)",
		},

		'[type="checkbox"]:checked + &:before': {
			background: vars.themeColors.tertiary,
			borderColor: vars.themeColors.tertiary,
		},

		/* checkmark */
		"&:after": {
			content: '""',
			position: "absolute",
			clipPath:
				"polygon(96.6% 10.1%, 94.3% 08.3%, 91.7% 07.6%, 89.0% 08.3%, 86.7% 10.1%, 35.0% 72.2%, 13.3% 46.1%, 10.9% 44.3%, 08.2% 43.7%, 05.5% 44.4%, 03.2% 46.3%, 01.7% 49.1%, 01.2% 52.4%, 01.8% 55.6%, 03.4% 58.3%, 30.1% 90.3%, 32.3% 92.2%, 35.0% 92.8%, 37.7% 92.2%, 39.9% 90.3%, 96.6% 22.3%, 98.2% 19.6%, 98.8% 16.2%, 98.2% 12.9%, 96.6% 10.1%)",
			height: pxToRem(8.52),
			width: pxToRem(11.71),
			top: pxToRem(7.76),
			left: pxToRem(6.15),
			backgroundColor: vars.themeColors.onTertiary,
			transition: "opacity 0.15s ease-in-out",
		},

		/* checked mark aspect changes */
		'[type="checkbox"]:not(:checked) + &:after': {
			opacity: "0",
		},

		'[type="checkbox"]:checked + &:after': {
			opacity: "1",
		},

		/* Disabled checkbox */
		'[type="checkbox"]:disabled:not(:checked) + &:before': {
			borderColor: vars.palette.neutral95,
			backgroundColor: vars.palette.neutral95,
		},

		'[type="checkbox"]:disabled:checked + &:before': {
			borderColor: vars.palette.neutral80,
			backgroundColor: vars.palette.neutral80,
		},

		'[type="checkbox"]:disabled:checked + &:after': {
			backgroundColor: vars.palette.neutral60,
		},

		'[type="checkbox"]:disabled + &': {
			color: vars.palette.neutral80,
		},

		/* Accessibility */
		'[type="checkbox"]:focus-visible + &': {
			outlineStyle: "solid",
			outlineWidth: 1,
			outlineColor: vars.themeColors.tertiary,
		},
	},
})
