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
}
