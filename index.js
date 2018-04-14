module.exports = {
  parser: 'babel-eslint',

  env: {
    es6: true,
    'shared-node-browser': true,
    commonjs: true,
  },

  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  extends: [

    // Core ESLint Rules
    './lib/core/errors.js',
    './lib/core/es6.js',
    './lib/core/variables.js',
    './lib/core/best-practices.js',
    './lib/core/stylistic-issues.js',

    // Plugins
    './lib/unicorn.js',
    './lib/json.js',
    './lib/markdown.js',
    './lib/promise.js',
    './lib/filenames.js',
    './lib/ava.js',
    './lib/eslint-comments.js',
    './lib/import.js',
    './lib/fp.js',
  ],

  rules: { strict: 'off' },
};
