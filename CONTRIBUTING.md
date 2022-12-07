# Contributing to framework.dev<!-- omit in toc -->

Please [read our Code of Conduct](CODE_OF_CONDUCT.md). By contributing to this
repository, you are agreeing to its rules.

## Table of contents<!-- omit in toc -->

- [Guidelines for content submission](#guidelines-for-content-submission)
  - [Courses](#courses)
  - [Blogs](#blogs)
- [How to add content to framework.dev](#how-to-add-content-to-frameworkdev)
- [Code Guidelines](#code-guidelines)
- [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)

## Guidelines for content submission

Thank you for your interest in contributing content to framework.dev! Please
read through the following guidelines for what kinds of submissions we are
looking for.

### Courses

- All Udemy, Edx or Coursera course suggestions must have a 4.5 rating or higher
- All course suggestions will be reviewed based on reputation in the community
  and view metrics
- Any paid course must have a valid checkout process through PayPal or Stripe

### Blogs

- All blog submissions will be reviewed based on reputation in the community and
  view metrics
- Any blog with excessive amounts of advertising where it interferes with the
  reading experience, will not be accepted either

## How to add content to framework.dev

Content should be added in the
`packages/site/src/data/<framework-name>/<model>.ts` files. Data files each
contain a list of content items. Items are type-checked to follow the schemata
defined in `packages/system/src/models`. Those model files contain additional
documentation on how each field should be populated, so consult them before
filling out new content.

Each list of content items have as well a list of tags used to tag the content,
such tags are type-checked which types can be found in
`packages/site/src/models/tags.ts`. There are certain rules to add a new tag:

- **Naming convention** - Tag names can be written in all lowercase except when
  the technology has more than one capital letter in it. For example, React will
  have a tag name of "react". But GraphQL will have a tag name of "GraphQL" and
  TypeScript will have a tag name of "TypeScript".
- **Repeated tags** - Before you add a new tag, please double-check the tags
  array to see if it already exists. This will help ensure there are no
  duplicate tags.

New content should be appended to data files at the end of the appropriate list.
Do not reorder the lists, the order is irrelevant and keeping it stable helps
keep git diffs small and intelligible.

It's best to run the site that you are adding content to on your local machine
to make sure you have not introduced any errors. Regardless of whether you
checked it locally first, check the preview version of the site when you open
your pull request and make sure the content you added exists and doesn't have
errors.

You should also make sure any content you add follows these points:

- **Relevance** – Items should be limited to professional-grade content that
  would be relevant to a developer in the relevant framework. If the content is
  relevant to developers in more than one framework — e.g. because it deals with
  general Javascript principles — it should be added individually to each
  framework. You are encouraged to add content you've worked on but only if it
  meets the above standards.
- **Tags** – Remember that tags exist to be filtering devices and as such are
  most useful when they can be applied to a large group of related items. Do not
  add a tag just to apply it to a single item. Do not add a tag that will be
  applied to every or almost every item.
- **Authors** – Authorship can be ambiguous for certain kinds of content. Always
  follow the authors stated in the content's copyright notice unless the content
  itself makes a clear contradictory claim. Copyright notices for open-source
  libraries are most often found in a `LICENSE.md` file.
- **Images** – Prefer links to established services like GitHub or Gravatar.
  With GitHub, a particularly useful property is that
  `github.com/<username>.png` will always link to that user's current profile
  picture.
- **Difficulty level** – Beginner content should be accessible to someone who
  has no prior knowledge of the topic being covered. Intermediate content
  assumes some prior knowledge and Advanced content consists of deep dives that
  would only be useful to someone who is already an expert in the relevant area.

## Code Guidelines

Consistency is important on a project, where many developers will work on this
codebase over long periods of time. Therefore, we expect all developers to
adhere to a common set of coding practices and expectations. This section will
be updated as the team decides on new standards.

- **Formatting** – Please follow the conventions as outlined in our prettier
  configuration and eslint settings.
- **Developer Testing** – Developers are responsible for thoroughly testing
  their code prior to putting it up for review. It is NOT the responsibility of
  the code reviewer to execute the code and test it (though the reviewer might
  run the code to aid their review if they want).
- **Minimal Pull Requests** – Do not commit changes to files where there was not
  a new feature added or an existing feature altered. Files altered only to
  remove unused imports or change formatting should not be included in pull
  requests. Code authors are expected to review the files in each pull request
  and revert files that were only incidentally changed. Please make sure you
  also update documentation as features get changed.
- **Code Comments** – We're not following a strict code commenting pattern (like
  js-doc), but developers are encouraged to use comments liberally where it may
  aid the understandability and readability of the code (especially for new
  contributors). Comments that merely explain what a line of code does are not
  necessary. Instead, comments should indicate the intent of the author. It
  could mention assumptions, constraints, intent, algorithm design, etc.
- **Commit/Pull Request Comments** – Code authors are strongly recommended to
  communicate the reason for the code changes, the nature of the changes, and
  the intent of the changes in their Git commit messages or PR descriptions.
  Additionally, while not strictly required, we recommend that code authors make
  comments in their pull requests where useful to help code reviewers understand
  the background/intent for some less obvious changes.

## Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

- Search [GitHub](https://github.com/thisdot/framework.dev/pulls) for an open or
  closed PR that relates to your submission. Help us reduce redundancies.
- Make your changes in your forked repository as a new git branch:

  ```shell
  git checkout -b my-fix-branch main
  ```

- Create your patch, following [code](#code-guidelines) and/or
  [content guidelines](#content-guidelines) as appropriate
- Commit your changes using a descriptive commit message.

  ```shell
  git commit -a
  ```

  Note: the optional commit `-a` command line option will automatically "add"
  and "rm" edited files.

- Push your branch to GitHub:

  ```shell
  git push origin my-fix-branch
  ```

- In GitHub, send a pull request to `this-dot/framework.dev:main`.
- If we suggest changes then:

  - Make the required updates.
  - Rebase your branch and force push to your GitHub repository (this will
    update your Pull Request):

    ```shell
    git rebase main -i
    git push -f
    ```

  - When updating your feature branch with the requested changes, please do not
    overwrite the commit history, but rather contain the changes in new commits.
    This is for the sake of a clearer and easier review process.

That's it! Thank you for your contribution!
