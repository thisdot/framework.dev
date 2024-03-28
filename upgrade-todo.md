- [x] Finish moving collections to types
- [x] Fix fetchers on pages to use new collections
- [x] Update migration to handle fetching images and storing them
- [x] Use the migration script to create framework entry generator -
      https://docs.google.com/spreadsheets/d/1yJJc5cSzZX6D1C3UL6DU_NvxvlpDHaGBuYQ-6P2B1I4/edit#gid=0

  - [x] identify which kit/kits
  - [x] identify what type of entry
  - [x] collect needed fields
  - [x] save file
  - [x] format file

- [ ] Fix broken images

  - [x] fix aws secret warning on git push

- [x] what type files should be checked in (types.d.ts, env.d.ts)
- [x] fix our type problems
- [ ] Verify that Storybook still works
- [x] Verify that packages/site/src/pages/categories/[category]/index.astro
      doesn't need a `flatMap` in its `getStaticPaths`
- [ ] Fix plop file - plop, html-element-list, lodash, fs/promises, inquirer-\*
- [x] Re-enable verbatimModuleSyntax in tsconfig and fix related type imports
- [ ] determine why aliases are throwing eslint errors
