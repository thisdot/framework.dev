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
		height: "9rem",
		width: "6rem",
	},
])

export const BookDifficulty = recipe({
	base: [
		sprinkles({
			fontSize: "xSmall",
			fontWeight: "bold",
		}),
		{
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
			hard: {
				color: themeColors.red,
			},
		},
	},
	defaultVariants: {
		difficulty: "beginner",
	},
})

export const BookTitle = style([
	sprinkles({ fontSize: "base", fontWeight: "bold" }),
	{ color: themeColors.gray800 },
])
