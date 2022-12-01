/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

module.exports = {
	workspaceRoot: path.join(__dirname, ".."),
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
			"@reach/tooltip",
			"@reach/utils/get-document-dimensions",
			"@reach/utils/owner-document",
			"@reach/utils/use-force-update",
			"@reach/utils/use-isomorphic-layout-effect",
			"@reach/utils/type-check",
			"@reach/utils/noop",
			"@reach/utils/dev-utils",
			"@reach/utils/compose-refs",
			"@reach/utils/compose-event-handlers",
			"@reach/portal"
			],
		env: {
			NODE_ENV: true,
		},
	},
	alias: {
		"@framework/system": "../system",
	},
}