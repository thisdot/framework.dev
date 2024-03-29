const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	core: {
		builder: 'webpack5',
	},
	typescript: { reactDocgen: false },
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-themes',
	],
	staticDirs: ['../src/util/example-assets'],
	webpackFinal(baseConfig, options) {
		const { module = {}, plugins = {} } = baseConfig

		const cssRule = module.rules.find((rule) => rule?.test?.test('test.css'))
		cssRule.test = /.*(?<!\.vanilla)\.css$/

		return {
			...baseConfig,
			plugins: [
				...plugins,
				new VanillaExtractPlugin(),
				new MiniCssExtractPlugin(),
			],
			module: {
				...module,
				rules: [
					...module.rules,
					{
						test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: require.resolve('css-loader'),
								options: {
									url: false, // Required as image imports should be handled via JS/TS import statements
								},
							},
						],
					},
				],
			},
		}
	},
	async previewHead(head) {
		const { fontHeadTags } = await import('../src/globals/font-import.mjs')
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
