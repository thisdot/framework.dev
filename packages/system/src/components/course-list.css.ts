import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"

export const courseListStyle = style([
	sprinkles({
		border: "thin",
		borderRadius: 12,
		display: "grid",
		backgroundColor: "highlight",
		padding: 32,
		rowGap: 12,
		color: "regularText",
	}),
])

export const courseListCourseHeaderStyle = sprinkles({
	display: "flex",
	layout: "row",
	gap: 16,
})

export const courseListCourseSpacerStyle = style([
	sprinkles({
		marginTop: 16,
	}),
	{
		width: "100%",
		height: "1px",
		backgroundColor: themeColors.gray200,
		alignSelf: "center",
	},
])

export const courseListCourseInfoStyle = sprinkles({
	marginBottom: 12,
	textStyle: "tinyCaps",
})

export const courseListCourseMetadataBullet = style({
	color: themeColors.gray300,
})
