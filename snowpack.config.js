module.exports = {
	workspaceRoot: __dirname,
	plugins: ["@vanilla-extract/snowpack-plugin"],
	packageOptions: {
		knownEntrypoints: [
			"classnames",
			"@reach/dialog",
			"@vanilla-extract/sprinkles/createRuntimeSprinkles",
			"@vanilla-extract/recipes/createRuntimeFn",
			"the-new-css-reset/css/reset.css",
			"normalize.css",
		],
		env: {
			NODE_ENV: true,
		},
	},
	alias: {
		"@framework/system": "../system",
	},
}