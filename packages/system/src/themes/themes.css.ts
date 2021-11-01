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
	blue: "#0F62FE",
	green: "#5D8300",
	red: "#F44336",
	redBg: "#FFECEB",
	reactBlue: "#7DEAFA",
	blue: "#175FE5",
	green: "#5D8300",
	purple: "#8A3FFC",
	white: "#FFFFFF",
}

export const vars = createThemeContract({
	color: {
		background: "",
		highlightBackground: "",
		shadedBackground: "",
		text: "",
		strongText: "",
		weakText: "",
		primary: "",
		primaryText: "",
		beginner: "",
		intermediate: "",
		advanced: "",
		paid: "",
	},
})

const lightThemeBase = {
	color: {
		primaryText: themeColors.gray900,
		background: themeColors.gray100,
		highlightBackground: themeColors.white,
		shadedBackground: themeColors.gray200,
		text: themeColors.gray700,
		strongText: themeColors.gray900,
		weakText: themeColors.gray500,
		beginner: themeColors.blue,
		intermediate: themeColors.green,
		advanced: themeColors.red,
		paid: themeColors.purple,
	},
}

export const reactTheme = createTheme(vars, {
	color: {
		primary: themeColors.reactBlue,
		...lightThemeBase.color,
	},
})

export const vueTheme = createTheme(vars, {
	color: {
		primary: themeColors.green,
		...lightThemeBase.color,
	},
})
