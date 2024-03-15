/* eslint-disable @typescript-eslint/no-var-requires */
const htmlElements = Object.keys(require('html-element-list'))
const _ = require('lodash')
const fs = require('fs/promises')

module.exports = function (
	/** @type {import('plop').NodePlopAPI} */
	plop,
) {
	plop.setPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
	plop.setPrompt(
		'file-selector',
		require('inquirer-file-tree-selection-prompt'),
	)
	plop.setHelper('startCase', _.startCase)
	plop.setHelper('kebabCase', _.kebabCase)
	plop.setHelper('camelCase', _.camelCase)
	plop.setHelper('pascalCase', _.flow(_.camelCase, _.upperFirst))
	plop.setGenerator('component', {
		description: 'design system component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'name of the component',
			},
			{
				type: 'autocomplete',
				name: 'el',
				message: 'the HTML element the component will have at its root',
				source: (_answers, input) =>
					htmlElements.filter((el) => el.startsWith(input)),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'packages/system/src/components/{{kebabCase name}}.tsx',
				templateFile: 'plop-templates/component.hbs',
			},
			{
				type: 'add',
				path: 'packages/system/src/components/{{kebabCase name}}.css.ts',
				templateFile: 'plop-templates/component.css.hbs',
			},
			{
				type: 'add',
				path: 'packages/system/src/components/{{kebabCase name}}.stories.tsx',
				templateFile: 'plop-templates/component.stories.hbs',
			},
		],
	})
	plop.setGenerator('icon', {
		description: 'design system icon',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message:
					"name of the icon (without the word 'icon', it will be appended automatically)",
			},
		],
		actions: [
			{
				type: 'add',
				path: 'packages/system/src/icons/{{kebabCase name}}-icon.tsx',
				templateFile: 'plop-templates/icon.hbs',
			},
		],
	})
	plop.setGenerator('color scheme', {
		description: 'generate a color scheme from a DSP tokens file',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'name for the color scheme',
			},
			{
				type: 'file-selector',
				name: 'tokensFile',
				message: 'token file from the DSP package',
				basePath: '.',
			},
		],
		actions: [
			async function (data) {
				const tokensFile = await fs.readFile(data.tokensFile)
				const tokensData = JSON.parse(tokensFile)
				data.palette = JSON.stringify(
					Object.fromEntries(
						tokensData.entities
							.filter((color) => color.category_id === 'ref.palette')
							.map((color) => [
								_.camelCase(_.last(color.id.split('.'))),
								color.value,
							]),
					),
				)
			},
			{
				type: 'add',
				path: 'packages/system/src/themes/{{kebabCase name}}-color-scheme.ts',
				templateFile: 'plop-templates/color-scheme.hbs',
			},
		],
	})
}
