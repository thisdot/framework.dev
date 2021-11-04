const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin")

module.exports = {
	core: {
		builder: "storybook-builder-vite",
	},
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"storybook-addon-themes",
	],
	viteFinal(config) {
		config.plugins.push(vanillaExtractPlugin())
		return config
	},
	async previewHead(head) {
		const { fontHeadTags } = await import("../src/globals/font-import.mjs")
		return `
		<style>
			@media only percy {
				.hide-in-percy {
					visibility: hidden;
				}
			}
		</style>
			${head}
			${fontHeadTags}
		`
	},
}
