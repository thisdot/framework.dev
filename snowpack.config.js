module.exports = {
	workspaceRoot: __dirname,
	plugins: ["@vanilla-extract/snowpack-plugin"],
	exclude: ["**/node_modules/**/*", "**/*.stories.tsx"],
	packageOptions: {
		knownEntrypoints: [
			"classnames",
			"@vanilla-extract/sprinkles/createRuntimeSprinkles",
			"the-new-css-reset/css/reset.css",
			"normalize.css",
		],
	},
}
