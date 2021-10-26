import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { vars } from "../themes/themes.css"

const space = {
	auto: "auto",
	none: 0,
	small: "4px",
	medium: "8px",
	large: "16px",
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
			small: {
				fontSize: "0.875rem",
				lineHeight: "1.25rem",
			},
			base: {
				fontSize: "1rem",
				lineHeight: "1.5",
			},
			large: {
				fontSize: "1.125rem",
				lineHeight: "1.75rem",
			},
			xl: {
				fontSize: "1.25rem",
				lineHeight: "1.75rem",
			},
		},
		fontWeight: {
			regular: 400,
			bold: 700,
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
		},
	},
})

export const sprinkles = createSprinkles(typography, layout, spacing, colors)
