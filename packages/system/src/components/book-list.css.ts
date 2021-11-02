import { style } from "@vanilla-extract/css"

import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"
import { pxToRem } from "../util/style-utils"

export const bookListStyle = style([
	sprinkles({
		backgroundColor: "highlight",
		border: "thin",
		borderRadius: 12,
		color: "regularText",
		columnGap: 32,
		display: "grid",
		padding: 32,
		rowGap: 24,
	}),
	{
		gridTemplateColumns: "repeat(auto-fit, minmax(126px, 1fr))",
	},
])

export const bookImage = style([
	sprinkles({
		border: "thin",
		marginBottom: 16,
	}),
	{
		borderRadius: "1px",
		boxShadow:
			"0px 8px 31px rgba(0, 0, 0, 0.13), 0px 1.00172px 3.88168px rgba(0, 0, 0, 0.065)",
		maxHeight: pxToRem(72),
	},
])

export const bookTitle = style([
	sprinkles({
		fontWeight: "bold",
		marginBottom: 4,
	}),
	{
		color: themeColors.gray800,
		display: "-webkit-box",
		fontSize: pxToRem(14),
		lineHeight: 18 / 14,
		marginTop: 0,
		overflow: "hidden",
		textOverflow: "ellipsis",
		WebkitLineClamp: 2,
		WebkitBoxOrient: "vertical",
	},
])

export const bookMetadata = sprinkles({
	textStyle: "subHeading",
})
