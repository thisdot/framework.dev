# Framework.dev

Framework.dev is a knowledge base for different frontend frameworks

## Structure

- `@framework/system` is the themeable design system which powers all
  framework.dev sites
- `@framework/react` is the code for the react.framework.dev site

## Running locally

First of all, `yarn install`

Then, `yarn dev` will run all servers. Dev servers for specific packages can be
run with `yarn dev:<package-name>` e.g. `yarn dev:system` or `yarn dev:react`.

### Known issues

- The sites can have some caching issues with Astro when developing. If hot
  reloading doesn't seem to be working correctly try restarting the dev server.
- Sometimes the Astro+snowpack dependency cache breaks completely and you begin
  to see compilation errors and dependencies not building correct (the symptom
  of which is often the browsers attempting to load `node:process` or other bare
  identifiers). Deleting the root `node_modules` as well as the `node_modules`
  in each of the packages and reinstalling fixes the problem.

## Contributing

PRs with content contributions and bug fixes are always welcome, see the
[contributing guidelines](./CONTRIBUTING.md).

If you have an idea for a new feature or major content change (new category, new
framework site, etc.) please open an issue first so it can be discussed and
vetted before contributing.
