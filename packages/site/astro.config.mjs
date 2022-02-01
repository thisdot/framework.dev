export default /** @type {import('astro').AstroUserConfig} */ {
	// Enable the React renderer to support React JSX components.
	renderers: ["@astrojs/renderer-react"],
	buildOptions: {
		pageUrlFormat: "file",
		site: `https://${process.env.SNOWPACK_PUBLIC_FRAMEWORK}.framework.dev`,
	},
	devOptions: {
		// If pageUrlFormat is "file" this line needs to be present for it to build correctly.
		// This is a bug in Astro: https://github.com/withastro/astro/issues/1338
		trailingSlash: "never",
	},
}
