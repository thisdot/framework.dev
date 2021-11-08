import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

enum GridArea {
	Info = "info",
	Header = "header",
	Body = "body",
	Spacer = "spacer",
	Footer = "footer",
}

export const libraryCardStyle = style([
	sprinkles({
		borderRadius: 12,
		display: "grid",
		backgroundColor: "surface",
		padding: 16,
		rowGap: 12,
		color: "regularText",
	}),
	{
		gridTemplateRows: `min-content min-content 1fr ${pxToRem(
			32 - 12 - 12
		)} min-content`,
		gridTemplateAreas: `
			"${GridArea.Info}"
			"${GridArea.Header}"
			"${GridArea.Body}"
			"${GridArea.Spacer}"
			"${GridArea.Footer}"
		`,
		minHeight: pxToRem(256),
	},
])

export const libraryCardHeaderStyle = style([
	sprinkles({
		layout: "row",
		gap: 16,
	}),
	{
		gridArea: GridArea.Header,
	},
])

export const libraryCardBodyStyle = style([
	sprinkles({ textStyle: "bodyText" }),
	{
		gridArea: GridArea.Body,
	},
])

export const libraryCardFooterStyle = style([
	sprinkles({
		layout: "row",
		gap: 4,
	}),
	{
		flexWrap: "wrap",
		gridArea: GridArea.Footer,
	},
])

export const libraryCardSpacerStyle = style({
	gridArea: GridArea.Spacer,
	width: "100%",
	height: "1px",
	backgroundColor: "outline",
	alignSelf: "center",
})

export const libraryCardInfoStyle = style([
	sprinkles({ textStyle: "tinyCaps", layout: "row", gap: 6 }),
	{
		gridArea: GridArea.Info,
		textTransform: "uppercase",
		flexWrap: "wrap",
	},
])

export const libraryCardBadgeStyle = style({
	height: 20,
	maxWidth: "100%",
})
