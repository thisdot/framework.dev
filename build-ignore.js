console.log("Checking for framework match");

switch (process.env.PUBLIC_FRAMEWORK) {
  case 'react':
    return "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./packages/site/src/data/react"
  default:
    return process.exitCode = 0
} 