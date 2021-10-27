import { createTheme, createThemeContract } from "@vanilla-extract/css"

export const themeColors = {
	gray100: "#F7F9FA",
	gray200: "#EDEFF2",
	gray300: "#D3DDE6",
	gray500: "#95A1AD",
	gray600: "#78838F",
	gray700: "#4D545C",
	gray800: "#25292E",
	gray900: "#1F2529",
}

export const vars = createThemeContract({
	color: {
		background: themeColors.gray100,
		text: themeColors.gray700,
		primary: "",
		primaryText: "",
	},
})

export const reactTheme = createTheme(vars, {
	color: {
		background: themeColors.gray100,
		text: themeColors.gray700,
		primary: themeColors.gray900,
		primaryText: "white",
	},
})

export const vueTheme = createTheme(vars, {
	color: {
		background: themeColors.gray100,
		text: themeColors.gray900,
		primary: "green",
		primaryText: "white",
	},
})
