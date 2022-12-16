# Framework.dev

Framework.dev is a knowledge base for different frontend frameworks

## Structure

- `@framework/system` is the themeable design system which powers all
  framework.dev sites
- `@framework/site` is the code for the actual sites. Each site has a different
  set of data in the `src/data` folder.

## Running locally

First of all, `yarn install`

Dev servers for specific packages can be run with `yarn dev:<package-name>`
e.g. `yarn dev:system` or `yarn dev:react`.

### Known issues

- The sites can have some caching issues with Astro when developing. If hot
  reloading doesn't seem to be working correctly try restarting the dev server.
- Sometimes the Astro+snowpack dependency cache breaks completely and you begin
  to see compilation errors and dependencies not building correct (the symptom
  of which is often the browsers attempting to load `node:process` or other bare
  identifiers). This can be fixed by running
  `rm -rf packages/site/node_modules && yarn build:react`

## Contributing

PRs with content contributions and bug fixes are always welcome, see the
[contributing guidelines](./CONTRIBUTING.md).

If you have an idea for a new feature or major content change (new category, new
framework site, etc.) please open an issue first so it can be discussed and
vetted before contributing.
