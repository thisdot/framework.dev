import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default /** @type {import('astro').AstroUserConfig} */ {
	// Enable the React renderer to support React JSX components.
	renderers: ["@astrojs/renderer-react"],
	vite: {
		plugins: [vanillaExtractPlugin()],
		optimizeDeps: {
			include: 
				[
					'color', 
					'classnames',
					"lodash-es",
				]
		},
		build: {
			commonjsOptions: {
				include: [/color/, /node_modules/, /classnames/, /lodash-es/]
			}
		}
	},
	buildOptions: {
		pageUrlFormat: "file",
		site: `https://${process.env.PUBLIC_FRAMEWORK}.framework.dev`,
	},
	devOptions: {
		// If pageUrlFormat is "file" this line needs to be present for it to build correctly.
		// This is a bug in Astro: https://github.com/withastro/astro/issues/1338
		trailingSlash: "never",
	},
}
