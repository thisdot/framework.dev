# Framework.dev

Framework.dev is a knowledge base surrounding the ecosystems of different
frameworks. It is primarily focused on the JavaScript ecosystem but may expand
to other languages in the future. This website is built using
[Astro](https://astro.build/). We hope you, the community, will assist us in
maintaining the content and informing us when content is out of date or
incorrect or when we're missing valuable content.

## Project Structure

- `@framework/system` is the themeable design system which powers all
  framework.dev sites
- `@framework/landing-site` is the code for the primary framework.dev site.
- `@framework/site` is the code for the framework-specific sites. Each site has
  a different set of data stored in content collections in the `src/content`.
  See below on how to quickly contribute new content.

## Getting Started

1. Clone the repo
2. Run `yarn` to install deps
3. Run `yarn dev:<site>` to start the dev server for a specific site

   - `site` is the name of the site you want to run, e.g. `angular`, `react`,
     `vue`, etc. See the package.json for a full list of sites.

## Contributing

PRs with content contributions and bug fixes are always welcome, see the
[contributing guidelines](./CONTRIBUTING.md).

If you have an idea for a new feature or major content change (new category, new
framework site, etc.) please open an issue first so it can be discussed and
vetted before contributing.

To contribute a new entry, we recommend utilizing the `yarn add-entry` command.
It is a CLI that will guide you on adding all the required content for a new
entry and store the content in the project.
