import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: '@storybook/react-vite',
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-themes'],
	typescript: {
		reactDocgen: false,
	},
	staticDirs: ['../src/util/example-assets'],
};

export default config;
