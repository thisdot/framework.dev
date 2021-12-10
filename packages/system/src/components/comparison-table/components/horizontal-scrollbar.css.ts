import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../../sprinkles/sprinkles.css"
import { vars } from "../../../themes/themes.css"
import { pxToRem } from "../../../util/style-utils"

export const horizontalScrollbarContainerStyle = style([
	sprinkles({
		border: "tableCell",
		borderRadius: 12,
		layout: "stack",
		maxHeight: "100%",
	}),
	{
		overflow: "hidden",
		position: "relative",
	},
])

export const horizontalScrollbarContentStyle = style({
	msOverflowStyle: "none",
	overflow: "auto",
	scrollbarWidth: "none",
	selectors: {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	},
})

export const horizontalScrollbarSectionStyle = style([
	sprinkles({
		borderTop: "tableCell",
		display: "grid",
		gap: 24,
		paddingX: 24,
		paddingY: 12,
	}),
	{
		backgroundColor: "white",
		gridTemplateColumns: "1fr auto",
		placeItems: "center",
	},
])

export const horizontalScrollbarTrackAndThumbStyle = style({
	display: "block",
	height: pxToRem(36),
	position: "relative",
	width: "100%",
})

export const horizontalScrollbarTrackStyle = style([
	sprinkles({
		borderRadius: 12,
	}),
	{
		backgroundImage: `linear-gradient(${vars.themeColors.onPrimary} 16px, ${vars.themeColors.tertiaryBorder} 16px, ${vars.themeColors.tertiaryBorder} 20px, ${vars.themeColors.onPrimary} 20px)`,
		cursor: "pointer",
		height: pxToRem(36),
		left: 0,
		position: "absolute",
		right: 0,
		width: "100%",
	},
])

export const horizontalScrollbarThumbStyle = style([
	sprinkles({
		borderRadius: 12,
	}),
	{
		backgroundImage: `linear-gradient(${vars.themeColors.onPrimary} 16px, ${vars.themeColors.regularText} 16px, ${vars.themeColors.regularText} 20px, ${vars.themeColors.onPrimary} 20px)`,
		height: pxToRem(36),
		position: "absolute",
	},
])

export const horizontalScrollbarButtonContainerStyle = style([
	sprinkles({
		display: "grid",
		gap: 4,
	}),
	{
		gridTemplateColumns: "repeat(2, auto)",
	},
])

export const horizontalScrollbarButtonStyle = style([
	sprinkles({
		backgroundColor: "surface",
		border: "tableCell",
		borderRadius: 12,
		display: "grid",
	}),
	{
		height: pxToRem(40),
		placeItems: "center",
		width: pxToRem(40),
	},
])

export const horizontalScrollbarButtonIconStyle = style({
	height: pxToRem(9),
	width: pxToRem(6),
})
