# Astraea <sub><sub><sub>TypeScript + React + Redux Boilerplate</sub></sub></sub>
[![Travis](http://img.shields.io/travis/jupl/astraea.svg?style=flat-square&label=travis)](https://travis-ci.org/jupl/astraea)
[![Dependencies](http://img.shields.io/david/jupl/astraea.svg?style=flat-square)](https://david-dm.org/jupl/astraea#info=devDependencies)
[![Dev Dependencies](http://img.shields.io/david/dev/jupl/astraea.svg?style=flat-square)](https://david-dm.org/jupl/astraea#info=devDependencies)

## Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
- [References](#references)

## About
This is a boilerplate project for developing a mid to large scale client-side application(s) using [TypeScript](https://www.typescriptlang.org/), [React](https://github.com/facebook/react), and [Redux](http://redux.js.org/).

[<sup>Back to top</sup>](#astraea-typescript--react--redux-boilerplate)

## Prerequisites
- [Node.js](https://nodejs.org/en/) (6.x minimum required)
  - [npm CLI](https://docs.npmjs.com/cli/npm) is usually included with Node.js
- [Yarn](https://yarnpkg.com/en/docs/install) (recommended)

[<sup>Back to top</sup>](#astraea-typescript--react--redux-boilerplate)

## Getting Started
1. Clone/download this repository.
2. Install dependencies using npm **or** Yarn:
  - `npm install`
  - `yarn`
3. Start running tasks as described below in the [tasks section](#tasks).

[<sup>Back to top</sup>](#astraea-typescript--react--redux-boilerplate)

## Project Structure

### Overview
```
astraea/
├─ .webpack/   # Webpack build configuration
├─ .storybook/ # Webpack configuration
├─ assets/     # Static files to icnlude in builds
├─ coverage/   # Code coverage reports
├─ dist/       # Result build data from build tasks
├─ src/
│  ├─ app/                # Application domain
│  │  ├─ components/root/ # Top level applicaiton view
│  │  ├─ actions.test.js  # Test to ensure all actions are valid
│  │  ├─ reducer.js       # Reducer for whole application
│  │  ├─ saga.js          # Saga entry for whole application
│  │  └─ styles.js        # Styling for application container
│  ├─ lib/                     # General purpose utilities
│  │  ├─ components/container/ # Application wrapper component
│  │  ├─ create─store.ts       # Helper to create a Redux store
│  │  └─ declarations.d.ts     # TypeScript declarations for project
│  ├─ domain1/ # See Domains section below
│  ├─ domain2/
│  ├─ domainX/
│  └─ app.tsx # Application entry point
├─ hot─server.js     # Source code for local development server
├─ package.json      # Configuration, tasks, and dependencies
├─ preprocessor.js   # Set up TypeScript for Jest
├─ tsconfig.json     # TypeScript configuration
├─ tslint.json       # TypeScript linting rules
└─ yarn.lock         # Dependency pinning from Yarn
```

### Entry Points
When JavaScript code is built, any files directly inside the `src/` directory are used to create the output files. The boilerplate currently generates `app.js`, as there is a single entry point inside `src/`. (`src/app.tsx`) If there are more than one entry points more files generated as well as an additional file `common.js`, which contains shared code across all entry points. `common.js` must be loaded before you load an entry point. You can see what gets generated by running the `build:dev`/`build:prod` task. (see the [tasks section](#tasks))

### Domains
```
domain/
├─ components/
│  ├─ component1/ # See Component sections below
│  ├─ component2/
│  └─ componentX/
├─ actions.ts # Redux actions for domain
├─ reducer.ts # Domain reducer
└─ saga.ts    # Domain sagas
```

Rather than group items by things like components/reducers/actions/etc., items are grouped by domain which can be a saner option as the project grows. Examples of domains can be things like resources (ex. `blog/`, `users/`) or other things. (ex. `ui/`) Domains may include things like components, actions, reducer, sagas, etc. but they don't have to include all of them. In fact, you can think of `app/` and `lib/` as domains. Other files may be present as well.

### Components
```
component/
├─ index.ts
└─ template.tsx
```

React components are grouped in a directory.
- `template.jsx` defines the React component without any knowledge of Redux specifics or other things like React DnD. (sometimes referred as *dumb* component)
- `index.js` is the entry point of the component when used by others.
  - If template does not require data/action bindings then it can just pass through the template. (see `src/app/components/root/index.ts`)
  - If template requires data/action bindings then it is done here.  (sometimes refereed as *smart* component)

### Other Files

#### `*.test.ts`, `*.test.tsx`
Tests for components/domains/logic/etc. Some guides on tests include:
- [Jest](https://facebook.github.io/jest/docs/api.html)
- [Enzyme](http://airbnb.io/enzyme/index.html#basic-usage)
- [React](https://facebook.github.io/jest/docs/tutorial-react.html)
- [Redux](http://redux.js.org/docs/recipes/WritingTests.html)
- [Redux Saga](http://yelouafi.github.io/redux-saga/docs/advanced/Testing.html)

#### `*.stories.tsx`
Defines a story to display in React Storybook. Typically this file is in a component. (ex. `index.stories.tsx`) [This guide](https://getstorybook.io/docs/react-storybook/basics/writing-stories) provides information on how to write stories.

#### `__snapshots__`
Generated files/directories when using Jest's [snapshot feature](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing). These files should be left to Jest and not touched manually.

[<sup>Back to top</sup>](#astraea-typescript--react--redux-boilerplate)

## Tasks
Tasks can be executed in the following manner:
```
npm run [command]  # npm
yarn run [command] # Yarn
```
Examples:
```
npm run build:dev
yarn run lint
```

### `server`
Start a local development server in port 3000 by default. To use another port have the environment variable `PORT` set to a number or modify `hot-server.js`. The following is provided in the development server:
- [Hot reloading](https://webpack.github.io/docs/hot-module-replacement.html) (including [React Hot Loader](https://github.com/gaearon/react-hot-loader))
- [Redux DevTools Extension](http://zalmoxisus.github.io/redux-devtools-extension/) (if unavailable [Logger for Redux](https://github.com/evgenyrodionov/redux-logger) is used)

### `server:story`
Start a local server for React Storybook on port 9001. For more information visit the [documentation for React Storybook](https://getstorybook.io/docs).

### `build:dev`
Build application and include assets into a packaged build in the `dist/` directory. This build is not minifed and includes source maps. Ideal for development.

### `build:prod`
Build application and include assets into a packaged build in the `dist/` directory. This build is minified (with dead code elimination) and does not include source maps. Ideal for production. This task is also available as an alias to `start`. (`npm start`, `yarn start`)

### `test`
Run tests once using Jest. For more information visit the [documentation for Jest](facebook.github.io/jest/docs/configuration.html).

### `test:watch`
Run tests once and rerun on changes using Jest.

### `lint`
Verify that code is valid using TypeScript and TSLint. For customzation modify `tsconfig.json` and/or `tslint.json`.

### `coverage`
Like `test` task, but also collects code coverage, which becomes available in the `coverage/` directory.

### `coverage:watch`
Run converage once and rerun on changes using Jest.

[<sup>Back to top</sup>](#astraea-typescript--react--redux-boilerplate)

## Project Resources
- Language
  - [TypeScript](http://www.typescriptlang.org/)
  - [TSLint](https://palantir.github.io/tslint/)
    - [TSLint React](https://github.com/palantir/tslint-react)
- Libraries
  - [React](https://facebook.github.io/react/)
  - [Redux](http://redux.js.org/)
    - [Redux Saga](http://yelouafi.github.io/redux-saga/)
    - [Redux Actions](https://github.com/acdlite/redux-actions)
  - [normalize.css](https://necolas.github.io/normalize.css/)
- Testing
  - [Jest](http://facebook.github.io/jest/)
  - [Enzyme](https://github.com/airbnb/enzyme/)
- Development Tools
  - [React Storybook](https://getstorybook.io/)
  - [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
- Build Tools
  - [Webpack](https://webpack.github.io/)

[<sup>Back to top</sup>](#astraea-typescript--react--redux-boilerplate)
