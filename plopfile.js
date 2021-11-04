/* eslint-disable @typescript-eslint/no-var-requires */
const htmlElements = Object.keys(require("html-element-list"))
const _ = require("lodash")

module.exports = function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setPrompt("autocomplete", require("inquirer-autocomplete-prompt"))
	plop.setHelper("startCase", _.startCase)
	plop.setHelper("kebabCase", _.kebabCase)
	plop.setHelper("camelCase", _.camelCase)
	plop.setHelper("pascalCase", _.flow(_.camelCase, _.upperFirst))
	plop.setGenerator("component", {
		description: "design system component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "name of the component",
			},
			{
				type: "autocomplete",
				name: "el",
				message: "the HTML element the component will have at its root",
				source: (_answers, input) =>
					htmlElements.filter((el) => el.startsWith(input)),
			},
		],
		actions: [
			{
				type: "add",
				path: "packages/system/src/components/{{kebabCase name}}.tsx",
				templateFile: "plop-templates/component.hbs",
			},
			{
				type: "add",
				path: "packages/system/src/components/{{kebabCase name}}.css.ts",
				templateFile: "plop-templates/component.css.hbs",
			},
			{
				type: "add",
				path: "packages/system/src/components/{{kebabCase name}}.stories.tsx",
				templateFile: "plop-templates/component.stories.hbs",
			},
		],
	})
}
