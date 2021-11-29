import { style, styleVariants } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

const base = style([
	sprinkles({
		padding: 16,
		backgroundColor: "white",
		border: "thin",
		borderRadius: 12,
	}),
	{
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
		},
	},
])
const titleFirst = style([
	{
		maxWidth: pxToRem(340),
	},
])
const imageFirst = style([
	{
		maxWidth: pxToRem(250),
	},
])
export const resourceCardStyle = styleVariants({
	titleFirst: [base, titleFirst],
	imageFirst: [base, imageFirst],
})

export const resourceCardHeaderStyle = style([
	sprinkles({ paddingBottom: 12 }),
	{
		display: "flex",
		selectors: {
			[`${titleFirst} &`]: {
				flexDirection: "row",
				gap: pxToRem(12),
			},
			[`${imageFirst} &`]: {
				flexDirection: "column",
				gap: pxToRem(16),
			},
		},
	},
])
export const resourceCardImageContainerStyle = style([
	sprinkles({ borderRadius: 8 }),
	{
		overflow: "hidden",
		display: "grid",
		alignItems: "center",
		justifyItems: "center",
		selectors: {
			[`${titleFirst} &`]: {
				width: pxToRem(40),
				height: pxToRem(40),
				border: "1px solid rgba(0, 0, 0, 0.04)",
			},
			[`${imageFirst} &`]: {
				minHeight: pxToRem(144),
				backgroundColor: vars.palette.neutral95,
			},
		},
	},
])
export const resourceCardBookImageDecoration = style({
	height: pxToRem(120),
	position: "relative",
	overflow: "hidden",
	borderRadius: pxToRem(2),
	"::before": {
		content: "",
		height: "100%",
		width: pxToRem(1.5),
		opacity: 0.25,
		background: "black",
		position: "absolute",
		left: 0,
		top: 0,
	},
	"::after": {
		content: "",
		height: "100%",
		position: "absolute",
		width: "4.5px",
		left: "1.5px",
		top: "0%",
		background:
			"linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.15) 100%)",
		opacity: "0.6",
	},
})
export const resourceCardImageStyle = style({
	maxHeight: "100%",
})
export const resourceCardTitleStyle = style([
	sprinkles({ textStyle: "bodyShort1", fontWeight: "bold", margin: 0 }),
	{
		":hover": {
			textDecoration: "underline",
		},
	},
])
export const resourceCardSubtitleStyle = style([
	sprinkles({ textStyle: "bodyShort3", color: "softText" }),
])
export const resourceCardBodyStyle = style([
	sprinkles({ textStyle: "bodyLong2", layout: "stack", gap: 12 }),
])
export const resourceCardFooterStyle = style([
	sprinkles({ paddingTop: 12, layout: "row", gap: 4 }),
])
