import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { sprinkles } from "../sprinkles/sprinkles.css"
import { themeColors } from "../themes/themes.css"

export const BookImage = style([
	sprinkles({
		border: "thin",
		marginBottom: 16,
	}),
	{
		borderRadius: "1px",
		boxShadow:
			"0px 8px 31px rgba(0, 0, 0, 0.13), 0px 1.00172px 3.88168px rgba(0, 0, 0, 0.065)",
		maxHeight: "9rem",
	},
])

export const BookDifficulty = recipe({
	base: [
		sprinkles({
			textStyle: "tinyCaps",
		}),
		{
			marginBottom: 12,
			textTransform: "uppercase",
		},
	],
	variants: {
		difficulty: {
			beginner: {
				color: themeColors.blue,
			},
			intermediate: {
				color: themeColors.green,
			},
			advanced: {
				color: themeColors.red,
			},
		},
	},
	defaultVariants: {
		difficulty: "beginner",
	},
})

export const BookTitle = style([
	sprinkles({
		textStyle: "minorHeading",
		fontWeight: "bold",
		marginBottom: 4,
	}),
	{
		color: themeColors.gray800,
		marginTop: 0,
	},
])

export const BookMetadata = sprinkles({
	textStyle: "subHeading",
	marginBottom: 12,
})

export const BookMetadataBullet = style({
	color: themeColors.gray300,
})

export const BookBlurb = sprinkles({
	textStyle: "bodyText",
})
