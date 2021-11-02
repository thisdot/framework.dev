import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

enum GridArea {
	Info = "info",
	Header = "header",
	Body = "body",
	Spacer = "spacer",
	Footer = "footer",
}

export const courseCardStyle = style([
	sprinkles({
		border: "thin",
		borderRadius: 12,
		display: "grid",
		backgroundColor: "highlight",
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
export const courseCardHeaderStyle = style([
	sprinkles({
		layout: "row",
		gap: 16,
	}),
	{
		gridArea: GridArea.Header,
	},
])
export const courseCardBodyStyle = style([
	sprinkles({ textStyle: "bodyText" }),
	{
		gridArea: GridArea.Body,
	},
])
export const courseCardFooterStyle = style([
	sprinkles({
		layout: "row",
		gap: 4,
	}),
	{
		flexWrap: "wrap",
		gridArea: GridArea.Footer,
	},
])
export const courseCardSpacerStyle = style({
	gridArea: GridArea.Spacer,
	width: "100%",
	height: "1px",
	backgroundColor: themeColors.gray200,
	alignSelf: "center",
})
export const courseCardInfoStyle = style([
	sprinkles({ textStyle: "tinyCaps" }),
	{
		gridArea: GridArea.Info,
	},
])
