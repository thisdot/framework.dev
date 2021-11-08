import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

const spaceInPixels = [
	0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 48, 56, 64,
] as const

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
	thin: `1px solid ${vars.themeColors.outline}`,
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
		textStyle: {
			tinyCaps: {
				textTransform: "uppercase",
				fontSize: pxToRem(10),
				lineHeight: 1,
				fontWeight: 600,
			},
			subHeading: {
				fontSize: pxToRem(12),
				lineHeight: 16 / 12,
			},
			bodyText: {
				fontSize: pxToRem(14),
				lineHeight: 20 / 14,
				color: vars.palette.neutral20,
			},
			clickable: {
				fontSize: pxToRem(14),
				lineHeight: 16 / 14,
				fontWeight: 600,
			},
			minorHeading: {
				fontSize: pxToRem(16),
				lineHeight: 20 / 16,
				fontWeight: 600,
			},
			sectionHeading: {
				fontSize: pxToRem(20),
				lineHeight: 24 / 20,
				fontWeight: 600,
			},
			pageHeading: {
				fontSize: pxToRem(30),
				lineHeight: 36 / 30,
				fontWeight: 600,
			},
			siteHeading: {
				fontSize: pxToRem(52),
				lineHeight: 58 / 52,
				fontWeight: 600,
			},
			large: {
				fontSize: pxToRem(20),
				lineHeight: 24 / 20,
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
		alignItems: ["stretch", "flex-start", "center", "flex-end", "end", "start"],
		justifyContent: [
			"stretch",
			"flex-start",
			"center",
			"flex-end",
			"space-between",
		],
		layout: {
			sidebar: {
				display: "grid",
				gridTemplateColumns: "200px 1fr",
				gridAutoRows: "1fr",
			},
			landscapeCardGrid: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, 340px) [end]",
				justifyContent: "center",
			},
			stack: {
				display: "flex",
				flexDirection: "column",
			},
			row: {
				display: "flex",
				flexDirection: "row",
			},
		},
	},
})

const colors = defineProperties({
	properties: {
		backgroundColor: vars.themeColors,
		color: vars.themeColors,
		borderColor: vars.themeColors,
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
