import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles/sprinkles.css"

export const courseListStyle = style([
	sprinkles({
		borderRadius: 12,
		display: "grid",
		backgroundColor: "surface",
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
		backgroundColor: "outline",
		alignSelf: "center",
	},
])

export const courseListCourseInfoStyle = sprinkles({
	marginBottom: 12,
	textStyle: "tinyCaps",
})

export const courseListCourseMetadataBullet = style({
	color: "outline",
})
