console.log("git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./src/data/react")
if ($SNOWPACK_PUBLIC_FRAMEWORK === "react" && "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./src/data/react" === 1) {
  process.exitCode = 1;
} else {
  process.exitCode = 0;
}