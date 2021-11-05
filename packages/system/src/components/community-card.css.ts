import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

enum GridArea {
	Info = "info",
	Header = "header",
	Body = "body",
}

export const communityCardStyle = style([
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
		gridTemplateRows: `min-content 1fr min-content`,
		gridTemplateAreas: `
		"${GridArea.Header}"
		"${GridArea.Body}"
		"${GridArea.Info}"
		`,
		minHeight: pxToRem(128),
	},
])

export const communityCardHeaderStyle = style([
	sprinkles({
		layout: "row",
		gap: 16,
	}),
	{
		gridArea: GridArea.Header,
	},
])

export const communityCardBodyStyle = style([
	sprinkles({ textStyle: "bodyText" }),
	{
		gridArea: GridArea.Body,
	},
])

export const communityCardInfoStyle = style([
	sprinkles({ textStyle: "tinyCaps", layout: "row", gap: 6 }),
	{
		gridArea: GridArea.Info,
		textTransform: "uppercase",
		flexWrap: "wrap",
	},
])
