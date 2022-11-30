console.log("Checking for framework match");

switch (process.env.PUBLIC_FRAMEWORK) {
  case 'react':
    console.log('framework match found, checking diff for changes')
    return "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./packages/site/src/data/react"
  default:
    console.log('no matches, exiting build')
    return process.exitCode = 0
} 