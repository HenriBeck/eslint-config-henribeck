# eslint-config-henribeck

[![npm](https://img.shields.io/npm/v/eslint-config-henribeck.svg)](https://www.npmjs.com/package/eslint-config-henribeck) ![Maintenance](https://img.shields.io/maintenance/yes/2018.svg) ![npm](https://img.shields.io/npm/l/eslint-config-henribeck.svg) ![David](https://img.shields.io/david/HenriBeck/eslint-config-henribeck.svg) [![CircleCI](https://circleci.com/gh/HenriBeck/eslint-config-henribeck.svg?style=svg)](https://circleci.com/gh/HenriBeck/eslint-config-henribeck)

Eslint config for my personal projects.

### Installation

```sh
yarn install eslint-config-henribeck --dev
```

### Usage

```js
module.exports = {
  extends: [
    'henribeck', // Base config
    'henribeck/client', // When your code is running in the browser
    'henribeck/server', // When your code is running on the server
    'henribeck/react', // When you use react
    'henribeck/flow', // When you use flow
    // 'henribeck/all' for enabling all of the configs
  ],
};
```
