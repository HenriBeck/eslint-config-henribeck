# eslint-config-henribeck

[![Greenkeeper badge](https://badges.greenkeeper.io/HenriBeck/eslint-config-henribeck.svg)](https://greenkeeper.io/)

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
