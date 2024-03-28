import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
	// Enable the React renderer to support React JSX components.
	integrations: [react()],
	build: {
		format: 'file',
	},
	site: `https://framework.dev/`,
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
