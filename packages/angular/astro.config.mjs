import rootConfig from "../../astro.config.mjs"

export default {
	...rootConfig,
	buildOptions: {
		site: "https://angular.framework.dev",
	},
}