import { createTheme, createThemeContract } from "@vanilla-extract/css"
import { reactColorPalette } from "./react-color-scheme"
import {
	blankPalette,
	darkThemeFromPalette,
	lightThemeFromPalette,
} from "./theme-from-palette"

export const vars = createThemeContract(lightThemeFromPalette(blankPalette))

export const reactTheme = createTheme(
	vars,
	lightThemeFromPalette(reactColorPalette)
)

export const reactThemeDark = createTheme(
	vars,
	darkThemeFromPalette(reactColorPalette)
)
