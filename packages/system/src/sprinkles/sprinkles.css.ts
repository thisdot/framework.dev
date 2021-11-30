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
	light: `1px solid ${vars.themeColors.surfaceVariant}`,
	tableCell: `0.5px solid ${vars.palette.neutral80}`,
}

export const breakpoints = {
	tablet: "screen and (min-width: 768px)",
	desktop: "screen and (min-width: 1024px)",
}

const conditions = {
	mobile: {},
	tablet: { "@media": breakpoints.tablet },
	desktop: { "@media": breakpoints.desktop },
}

const typography = defineProperties({
	conditions,
	defaultCondition: "mobile",
	properties: {
		textStyle: {
			h600: {
				fontSize: pxToRem(64),
				fontWeight: 700,
				letterSpacing: "-0.02em",
				lineHeight: 1.06,
			},
			h500: {
				fontSize: pxToRem(52),
				fontWeight: 700,
				letterSpacing: "-0.02em",
				lineHeight: 1.11,
			},
			h400: {
				fontSize: pxToRem(40),
				fontWeight: 700,
				letterSpacing: "-0.02em",
				lineHeight: 1.2,
			},
			h300: {
				fontSize: pxToRem(30),
				fontWeight: 700,
				letterSpacing: "-0.02em",
				lineHeight: 1.2,
			},
			h200: {
				fontSize: pxToRem(24),
				fontWeight: 700,
				letterSpacing: "-0.02em",
				lineHeight: 1.32,
			},
			h100: {
				fontSize: pxToRem(20),
				fontWeight: 700,
				letterSpacing: "-0.02em",
				lineHeight: 1.39,
			},
			subtitle1: {
				fontSize: pxToRem(20),
				fontWeight: 600,
				letterSpacing: "-0.02em",
				lineHeight: 1.2,
			},
			subtitle2: {
				fontSize: pxToRem(18),
				fontWeight: 600,
				letterSpacing: "-0.02em",
				lineHeight: 1.12,
			},
			bodyShort1: {
				fontSize: pxToRem(16),
				fontWeight: 400,
				letterSpacing: "-0.01em",
				lineHeight: 1.24,
			},
			bodyShort2: {
				fontSize: pxToRem(14),
				fontWeight: 400,
				letterSpacing: "-0.01em",
				lineHeight: 1.28,
			},
			bodyShort3: {
				fontSize: pxToRem(12),
				fontWeight: 400,
				letterSpacing: "-0.01em",
				lineHeight: 1.32,
			},
			bodyLong1: {
				fontSize: pxToRem(16),
				fontWeight: 400,
				letterSpacing: "-0.01em",
				lineHeight: 1.5,
			},
			bodyLong2: {
				fontSize: pxToRem(14),
				fontWeight: 400,
				letterSpacing: "-0.01em",
				lineHeight: 1.42,
			},
			bodyLong3: {
				fontSize: pxToRem(12),
				fontWeight: 400,
				letterSpacing: "-0.01em",
				lineHeight: 1.48,
			},
			caption: {
				fontSize: pxToRem(14),
				fontWeight: 500,
				letterSpacing: "-0.01em",
				lineHeight: 1,
			},
			overline: {
				fontSize: pxToRem(10),
				fontWeight: 500,
				letterSpacing: "0.05em",
				lineHeight: 1,
				textTransform: "uppercase",
			},
			button: {
				fontSize: pxToRem(15),
				fontWeight: 600,
				letterSpacing: "-0.01em",
				lineHeight: 16 / 15,
			},
			buttonSmall: {
				fontSize: pxToRem(12),
				fontWeight: 500,
				lineHeight: 1,
			},
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
		objectFit: ["contain"],
		display: ["none", "block", "flex", "grid"],
		flexDirection: ["row", "column"],
		alignItems: ["stretch", "flex-start", "center", "flex-end", "end", "start"],
		width: {
			full: "100%",
			auto: "auto",
		},
		height: {
			full: "100%",
			auto: "auto",
		},
		justifyContent: [
			"stretch",
			"flex-start",
			"center",
			"flex-end",
			"space-between",
		],
		hidden: {
			none: {},
			visually: {
				borderWidth: "0",
				clip: "rect(1px, 1px, 1px, 1px)",
				height: "1px",
				overflow: "hidden",
				padding: "0",
				position: "absolute",
				whiteSpace: "nowrap",
				width: "1px",
			},
			fully: {
				display: "none",
			},
		},
		layout: {
			sidebar: {
				display: "grid",
				gridTemplateColumns: "240px 1fr",
				gridAutoRows: "1fr",
			},
			titleFirstCardGrid: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, 340px) [end]",
			},
			imageFirstCardGrid: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, 250px) [end]",
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
