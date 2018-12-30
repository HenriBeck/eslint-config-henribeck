module.exports = {
  parser: 'eslint-plugin-typescript/parser',

  extends: ['./lib/typescript.js'],

  overrides: [{
    files: ['*.d.ts'],
    rules: {
      'import/unambiguous': 'off',
      'init-declarations': 'off',
    },
  }],
};
