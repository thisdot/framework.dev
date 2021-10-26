import { createTheme, createThemeContract } from "@vanilla-extract/css"

export const vars = createThemeContract({
	color: {
		primary: "",
		primaryContrast: "",
	},
})

export const reactTheme = createTheme(vars, {
	color: {
		primary: "black",
		primaryContrast: "white",
	},
})

export const vueTheme = createTheme(vars, {
	color: {
		primary: "green",
		primaryContrast: "white",
	},
})
