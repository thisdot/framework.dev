echo "Checking for framework match"
echo "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./packages/site/src/data/react"

if [[ $PUBLIC_FRAMEWORK === "react" && "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./packages/site/src/data/react" === 1 ]] 
then
  process.exitCode = 1;
else 
  process.exitCode = 0;
fi