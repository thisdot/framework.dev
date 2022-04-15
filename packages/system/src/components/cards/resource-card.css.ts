import { style, styleVariants } from "@vanilla-extract/css"
import { breakpoints, sprinkles } from "../../sprinkles/sprinkles.css"
import { vars } from "../../themes/themes.css"
import { pxToRem } from "../../util/style-utils"

const base = style([
	sprinkles({
		backgroundColor: "white",
		border: "thin",
		borderRadius: 12,
	}),
	{
		display: "grid",
		padding: pxToRem(15),
		selectors: {
			"&:not(:hover)": {
				borderColor: "transparent",
			},
			'&[data-selected="true"]': {
				borderWidth: pxToRem(4),
				padding: pxToRem(12),
				borderColor: vars.palette.tertiary60,
			},
		},
	},
])
const titleFirst = style([
	sprinkles({ columnGap: 12, rowGap: { mobile: 8, tablet: 12 } }),
	{
		gridTemplateAreas: `
		"image header"
		"body body"
		"footer footer"
		`,
		gridTemplateColumns: "min-content 1fr",
		gridTemplateRows: "auto 1fr auto",
	},
])
const imageFirst = style([
	sprinkles({ columnGap: 16, rowGap: { mobile: 8, tablet: 12 } }),
	{
		gridTemplateAreas: `
		"image header"
		"image body"
		"image footer"
		`,
		gridTemplateColumns: `${pxToRem(112)} 1fr`,
		gridTemplateRows: "auto 1fr auto",
		"@media": {
			[breakpoints.tablet]: {
				gridTemplateColumns: "1fr",
				gridTemplateRows: "auto auto 1fr auto",
				gridTemplateAreas: `
				"image"
				"header"
				"body"
				"footer"
				`,
			},
		},
	},
])
export const resourceCardStyle = styleVariants({
	titleFirst: [base, titleFirst],
	imageFirst: [base, imageFirst],
})

export const resourceCardHeaderStyle = style({
	display: "flex",
	gridArea: "header",
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
})

export const resourceCardTitleContainerStyle = style([
	sprinkles({ layout: "stack", gap: 4 }),
	{
		flexGrow: 1,
	},
])

export const resourceCardImageContainerStyle = style([
	sprinkles({ borderRadius: 8 }),
	{
		gridArea: "image",
		overflow: "hidden",
		display: "grid",
		alignItems: "start",
		justifyItems: "center",
		selectors: {
			[`${titleFirst} &`]: {
				width: pxToRem(40),
				height: pxToRem(40),
				border: "1px solid rgba(0, 0, 0, 0.04)",
				alignItems: "center",
			},
			[`${imageFirst} &`]: {
				minHeight: pxToRem(144),
			},
		},
	},
])

export const bookImageContainerStyle = style({
	backgroundColor: vars.palette.neutral95,
	alignItems: "center",
})

export const resourceCardBookImageDecoration = style({
	height: pxToRem(120),
})

export const resourceCardImageStyle = style([
	sprinkles({ borderRadius: 8 }),
	{
		maxHeight: "180px",
		selectors: {
			[`${bookImageContainerStyle} &`]: {
				borderRadius: 0,
			},
		},
	},
])
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
	{ gridArea: "body" },
])
export const resourceCardFooterStyle = style([
	sprinkles({ layout: "stack" }),
	{
		justifyContent: "flex-end",
		gridArea: "footer",
	},
])
