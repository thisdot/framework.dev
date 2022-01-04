// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the React renderer to support React JSX components.
	renderers: ["@astrojs/renderer-react"],
	buildOptions: {
		pageUrlFormat: "file",
	},
	devOptions: {
		// If pageUrlFormat is "file" this line needs to be present for it to build correctly.
		// This is a bug in Astro: https://github.com/withastro/astro/issues/1338
		trailingSlash: "never",
	},
})
