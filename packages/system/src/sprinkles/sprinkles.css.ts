import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { vars, themeColors } from "../themes/themes.css"

const spaceInPixels = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24] as const

const pxToRem = (px: number) => `${px / 16}rem`
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
		justifyContent: ["stretch", "flex-start", "center", "flex-end"],
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
		color: {
			regularText: {
				backgroundColor: vars.color.background,
				color: vars.color.text,
			},
			primaryText: {
				backgroundColor: vars.color.background,
				color: vars.color.primary,
			},
			primaryButton: {
				backgroundColor: vars.color.primary,
				color: vars.color.primaryText,
			},
			destructiveButton: {
				backgroundColor: "#FFECEB",
				color: "#F44336",
			},
			tag: {
				background: "rgba(0, 0, 0, 0.04)",
				color: themeColors.gray700,
			},
		},
	},
})

export const sprinkles = createSprinkles(typography, layout, spacing, colors)
