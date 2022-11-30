echo "Checking for framework match"
echo $(git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./packages/site/src/data/react)
echo $PUBLIC_FRAMEWORK

if [ $PUBLIC_FRAMEWORK == "react" ] && [ $(git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF ./packages/site/src/data/react) -eq 1 ]
then
  exit 1
else 
  exit 0
fi