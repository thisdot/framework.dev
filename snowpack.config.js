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
			"fuse.js",
			"assert-never",
			"lodash",
			"title-case",
			"@reach/combobox/styles.css",
			"@reach/combobox",
			"@reach/utils/context",
			"@reach/utils/make-id",
			"@reach/utils/use-update-effect",
			"@reach/utils/use-stateful-ref-value",
		],
		env: {
			NODE_ENV: true,
		},
	},
	alias: {
		"@framework/system": "../system",
	},
}
