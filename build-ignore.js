console.log("Checking if the site needs to build...")

switch (process.env.PUBLIC_SITE_NAME) {
	case "system":
		console.log("site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/system/"
	case "landing":
		console.log("landing site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/landing-site/"
	case "react":
		console.log("react site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/react/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "nodejs":
		console.log("node site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/nodejs/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "graphql":
		console.log("graphql site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/graphql/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "vue":
		console.log("vue site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/vue/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "solidjs":
		console.log("solid site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/solidjs/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "angular":
		console.log("angular site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/angular/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "svelte":
		console.log("svelte site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/svelte/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "qwik":
		console.log("qwik site match found, checking diff for changes")
		return "git diff main $BRANCH ./packages/site/src/data/qwik/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	default:
		console.log("no matches, exiting build process")
		return (process.exitCode = 0)
}
