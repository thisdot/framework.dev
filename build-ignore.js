console.log("Checking if the site needs to build...")

switch (process.env.PUBLIC_SITE_NAME) {
	case "system":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/system/"
	case "landing":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/landing-site/"
	case "react":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/react/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "nodejs":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/nodejs/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "graphql":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/graphql/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "vue":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/vue/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "solidjs":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/solidjs/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "angular":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/angular/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "svelte":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/svelte/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	case "qwik":
		console.log("site match found, checking diff for changes")
		return "git diff --quiet $HEAD $COMMIT_REF ./packages/site/src/data/qwik/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/"
	default:
		console.log("no matches, exiting build process")
		return (process.exitCode = 0)
}
