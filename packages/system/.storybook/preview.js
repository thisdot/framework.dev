import "../src/globals/global-styles"
import { reactTheme, vueTheme } from "../src/themes/themes.css"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		default: "react",
		list: [
			{ name: "react", class: reactTheme, color: "#61dafb" },
			{ name: "vue", class: vueTheme, color: "#4fc08d" },
		],
	},
}
