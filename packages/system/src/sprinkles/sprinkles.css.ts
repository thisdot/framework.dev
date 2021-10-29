import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { vars, themeColors } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

const spaceInPixels = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24] as const

const spaceInRem = Object.fromEntries(
	spaceInPixels.map((px) => [px, pxToRem(px)])
) as {
	[K in typeof spaceInPixels[Exclude<
		keyof typeof spaceInPixels,
		keyof []
	>]]: string
}

const space = {
	auto: "auto",
	...spaceInRem,
}

const borders = {
	thin: "1px solid rgba(0, 0, 0, 0.08)",
}

const conditions = {
	mobile: {},
	tablet: { "@media": "screen and (min-width: 768px)" },
	desktop: { "@media": "screen and (min-width: 1024px)" },
}

const typography = defineProperties({
	conditions,
	defaultCondition: "mobile",
	properties: {
		fontSize: {
			xSmall: {
				fontSize: pxToRem(10),
				lineHeight: pxToRem(10),
			},
			small: {
				fontSize: pxToRem(14),
				lineHeight: pxToRem(16),
			},
			base: {
				fontSize: pxToRem(16),
				lineHeight: pxToRem(20),
			},
		},
		fontWeight: {
			regular: 400,
			bold: 600,
		},
	},
})

const spacing = defineProperties({
	conditions,
	defaultCondition: "mobile",
	properties: {
		paddingLeft: space,
		paddingRight: space,
		paddingTop: space,
		paddingBottom: space,
		marginLeft: space,
		marginRight: space,
		marginTop: space,
		marginBottom: space,
		rowGap: space,
		columnGap: space,
		borderRadius: space,
	},
	shorthands: {
		padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
		margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
		marginX: ["marginLeft", "marginRight"],
		marginY: ["marginTop", "marginBottom"],
		gap: ["rowGap", "columnGap"],
	},
})

const layout = defineProperties({
	conditions,
	defaultCondition: "mobile",
	properties: {
		display: ["none", "block", "flex", "grid"],
		flexDirection: ["row", "column"],
		alignItems: ["stretch", "flex-start", "center", "flex-end"],
		justifyContent: [
			"stretch",
			"flex-start",
			"center",
			"flex-end",
			"space-between",
		],
		grid: {
			sidebar: {
				display: "grid",
				gridTemplateColumns: "200px 1fr",
				gridAutoRows: "1fr",
			},
		},
	},
})

const colors = defineProperties({
	properties: {
		backgroundColor: {
			regular: vars.color.background,
			highlight: vars.color.highlightBackground,
			shaded: vars.color.shadedBackground,
			primary: vars.color.primary,
			destructiveAction: themeColors.redBg,
		},
		color: {
			regularText: vars.color.text,
			strongText: vars.color.strongText,
			primaryText: vars.color.primary,
			primaryButtonText: vars.color.primaryText,
			destructiveButtonText: themeColors.red,
		},
		borderTop: borders,
		borderBottom: borders,
		borderLeft: borders,
		borderRight: borders,
	},
	shorthands: {
		borderX: ["borderLeft", "borderRight"],
		borderY: ["borderTop", "borderBottom"],
		border: ["borderBottom", "borderLeft", "borderRight", "borderTop"],
	},
})

export const sprinkles = createSprinkles(typography, layout, spacing, colors)
