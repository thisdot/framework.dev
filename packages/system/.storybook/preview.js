import "../src/globals/global-styles"
import { reactTheme, vueTheme } from "../src/themes/themes.css"
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
	themes: {
		Decorator,
		default: "react",
		list: [
			{ name: "react", class: reactTheme, color: "#61dafb" },
			{ name: "vue", class: vueTheme, color: "#4fc08d" },
		],
	},
}
