import { type Parameters } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/globals/global-styles';
import {
	vars,
	reactTheme,
	reactThemeDark,
	angularTheme,
	angularThemeDark,
	vueTheme,
	vueThemeDark,
	solidjsTheme,
	solidjsThemeDark,
	qwikTheme,
	qwikThemeDark,
	svelteTheme,
	svelteThemeDark,
	nodejsTheme,
	nodejsThemeDark,
	graphqlTheme,
	graphqlThemeDark,
	denoTheme,
	denoThemeDark,
} from '../src/themes/themes.css';

export const decorators = [
	withThemeByClassName({
		themes: {
			Angular: angularTheme,
			'Angular Dark': angularThemeDark,
			Deno: denoTheme,
			'Deno Dark': denoThemeDark,
			GraphQL: graphqlTheme,
			'GraphQL Dark': graphqlThemeDark,
			Nodejs: nodejsTheme,
			'Nodejs Dark': nodejsThemeDark,
			Qwik: qwikTheme,
			'Qwik Dark': qwikThemeDark,
			React: reactTheme,
			'React Dark': reactThemeDark,
			Solidjs: solidjsTheme,
			'Solidjs Dark': solidjsThemeDark,
			Svelte: svelteTheme,
			'Svelte Dark': svelteThemeDark,
			Vue: vueTheme,
			'Vue Dark': vueThemeDark,
		},
		defaultTheme: 'React',
	}),
];

const parameters: Parameters = {
	parameters: {
		backgrounds: {
			default: 'theme',
			values: [
				{
					name: 'theme',
					value: vars.themeColors.surface4,
					default: true,
				},
			],
		},
	},
};

export default parameters;
