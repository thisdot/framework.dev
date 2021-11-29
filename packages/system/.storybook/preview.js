import "../src/globals/global-styles"
import { vars, reactTheme, reactThemeDark } from "../src/themes/themes.css"
import { addDecorator } from "@storybook/react"
import { withThemes } from "storybook-addon-themes/react"
import { useEffect } from "react"

addDecorator(withThemes)

function Decorator({ themeClasses, children }) {
	useEffect(() => {
		document.documentElement.className = themeClasses
	}, [themeClasses])
	return children
}

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: "Surface",
		values: [
			{
				name: "Surface",
				value: vars.themeColors.surface4,
				default: true,
			},
			{
				name: "White",
				value: vars.themeColors.white,
				default: true,
			},
		],
	},
	themes: {
		Decorator,
		default: "react",
		list: [
			{ name: "react", class: reactTheme, color: "#A6EEFF" },
			{ name: "reactDark", class: reactThemeDark, color: "#004E5C" },
		],
	},
}
