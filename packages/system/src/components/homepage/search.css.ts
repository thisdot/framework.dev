import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import {
	searchInputBoxStyle,
	searchInputIconStyle,
	searchInputInputStyle,
	searchInputLabelStyle,
	searchInputResetButtonStyle,
	searchInputStaticPrefixStyle,
} from "../search/search-input.css"

export const searchStyle = style([
	sprinkles({
		display: "grid",
		gap: 12,
		marginY: 16,
	}),
	{
		gridTemplateColumns: "1fr min-content",
	},
])
export const searchBoxStyle = style([
	searchInputBoxStyle,
	{
		selectors: {
			[`${searchInputBoxStyle}&`]: {
				gridTemplateColumns: "min-content 1fr",
			},
		},
	},
])
export const searchIconStyle = searchInputIconStyle
export const searchInputStyle = searchInputInputStyle
export const searchLabelStyle = searchInputLabelStyle
export const searchResetButtonStyle = searchInputResetButtonStyle
export const searchStaticPrefixStyle = searchInputStaticPrefixStyle
