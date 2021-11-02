module.exports = {
	workspaceRoot: __dirname,
	plugins: ["@vanilla-extract/snowpack-plugin"],
	exclude: ["**/node_modules/**/*", "**/*.stories.tsx"],
	packageOptions: {
		knownEntrypoints: [
			"classnames",
			"@reach/dialog",
			"@vanilla-extract/sprinkles/createRuntimeSprinkles",
			"@vanilla-extract/recipes/createRuntimeFn",
			"the-new-css-reset/css/reset.css",
			"normalize.css",
		],
	},
}
