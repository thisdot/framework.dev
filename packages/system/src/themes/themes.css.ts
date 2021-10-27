import { createTheme, createThemeContract } from "@vanilla-extract/css"

export const themeColors = {
	gray100: "#F7F9FA",
	gray200: "#EDEFF2",
	gray300: "#D3DDE6",
	gray400: "#B4BFCC",
	gray500: "#95A1AD",
	gray600: "#78838F",
	gray700: "#4D545C",
	gray800: "#25292E",
	gray900: "#1F2529",
	redBg: "#FFECEB",
	red: "#F44336",
	reactBlue: "#7DEAFA",
	white: "#FFFFFF",
}

export const vars = createThemeContract({
	color: {
		background: "",
		highlightBackground: "",
		shadedBackground: "",
		text: "",
		strongText: "",
		primary: "",
		primaryText: "",
	},
})

export const reactTheme = createTheme(vars, {
	color: {
		background: themeColors.gray100,
		highlightBackground: themeColors.white,
		shadedBackground: themeColors.gray200,
		text: themeColors.gray700,
		strongText: themeColors.gray900,
		primary: themeColors.reactBlue,
		primaryText: themeColors.gray900,
	},
})

export const vueTheme = createTheme(vars, {
	color: {
		background: themeColors.white,
		highlightBackground: themeColors.white,
		shadedBackground: themeColors.gray200,
		text: themeColors.gray900,
		strongText: themeColors.gray900,
		primary: "green",
		primaryText: themeColors.white,
	},
})
