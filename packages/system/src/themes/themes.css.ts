import { createTheme, createThemeContract } from "@vanilla-extract/css"

export const vars = createThemeContract({
	color: {
		background: "",
		text: "",
		primary: "",
		primaryText: "",
	},
})

export const reactTheme = createTheme(vars, {
	color: {
		background: "white",
		text: "black",
		primary: "black",
		primaryText: "white",
	},
})

export const vueTheme = createTheme(vars, {
	color: {
		background: "white",
		text: "black",
		primary: "green",
		primaryText: "white",
	},
})
