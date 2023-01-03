import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

export default /** @type {import('astro').AstroUserConfig} */ {
	// Enable the React renderer to support React JSX components.
	renderers: ["@astrojs/renderer-react"],
	buildOptions: {
		site: `https://${process.env.VITE_FRAMEWORK}.framework.dev`,
	},
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
}
