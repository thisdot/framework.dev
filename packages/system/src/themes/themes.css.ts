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

// TODO: replace these with the appropriate palettes once we have them

export const angularTheme = createTheme(
	vars,
	lightThemeFromPalette(reactColorPalette)
)

export const angularThemeDark = createTheme(
	vars,
	darkThemeFromPalette(reactColorPalette)
)

export const vueTheme = createTheme(
	vars,
	lightThemeFromPalette(reactColorPalette)
)

export const vueThemeDark = createTheme(
	vars,
	darkThemeFromPalette(reactColorPalette)
)

export const derivedAttributes = {
	outline: `2px solid ${vars.themeColors.tertiary}`,
}
