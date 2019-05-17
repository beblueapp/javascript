# @beblueapp/eslint-config-react

![Version](https://img.shields.io/npm/v/@beblueapp/eslint-config-react.svg)

This package provides Beblue's .eslintrc as an extensible shared config.

## Usage

Our default export contains ESLint rules related to React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you need base rules, see [@beblueapp/eslint-config-base](https://npmjs.com/@beblueapp/eslint-config-base).

1. Install the correct versions of each package, which are listed by the command:


  ```sh
  npx install-peerdeps --dev @beblueapp/eslint-config-base
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "@beblueapp/eslint-config-react@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

  If using **npm < 5**, users can run (for Yarn just change `npm install --save-dev` to `yarn add -D`)

  ```sh
  (
    export PKG='@beblueapp/eslint-config-react';
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @beblueapp/eslint-config-react 'eslint@^#.#.#' 'eslint-plugin-import@^#.#.#'
  ```

2. Add `"extends": "@beblueapp/eslint-config-react"` to your .eslintrc
