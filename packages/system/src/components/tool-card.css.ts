import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

enum GridArea {
	Header = "header",
	Body = "body",
	Spacer = "spacer",
	Footer = "footer",
}

export const toolCardStyle = style([
	sprinkles({
		borderRadius: 12,
		display: "grid",
		backgroundColor: "surface",
		padding: 16,
		rowGap: 12,
		color: "regularText",
	}),
	{
		gridTemplateRows: `min-content 1fr ${pxToRem(32 - 12 - 12)} min-content`,
		gridTemplateAreas: `
			"${GridArea.Header}"
			"${GridArea.Body}"
			"${GridArea.Spacer}"
			"${GridArea.Footer}"
		`,
		minHeight: pxToRem(256),
	},
])

export const toolCardHeaderStyle = style([
	sprinkles({
		layout: "row",
		gap: 16,
	}),
	{
		gridArea: GridArea.Header,
	},
])

export const toolCardBodyStyle = style([
	sprinkles({ textStyle: "bodyText" }),
	{
		gridArea: GridArea.Body,
	},
])

export const toolCardFooterStyle = style([
	sprinkles({
		layout: "stack",
		gap: 12,
	}),
	{
		gridArea: GridArea.Footer,
	},
])

export const toolCardSpacerStyle = style({
	gridArea: GridArea.Spacer,
	width: "100%",
	height: "1px",
	backgroundColor: "outline",
	alignSelf: "center",
})
