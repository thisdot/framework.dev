import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pxToRem } from "../util/style-utils"

export const bookCardStyle = style([
	sprinkles({
		borderRadius: 12,
		display: "grid",
		backgroundColor: "surface",
		padding: 20,
		rowGap: 12,
		color: "regularText",
		layout: "stack",
	}),
	{
		minHeight: pxToRem(256),
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
		maxHeight: pxToRem(144),
	},
])

export const bookTitle = sprinkles({
	textStyle: "minorHeading",
	fontWeight: "bold",
	marginBottom: 4,
	marginTop: 12,
})

export const bookMetadata = sprinkles({
	textStyle: "subHeading",
	marginBottom: 12,
})

export const bookBlurb = sprinkles({
	textStyle: "bodyText",
})
