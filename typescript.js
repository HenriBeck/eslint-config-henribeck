module.exports = {
  parser: '@typescript-eslint/parser',

  extends: ['./lib/typescript.js'],

  rules: {
    // This is currently buggy with the typescript parser
    'no-useless-constructor': 'off',

    // Will be handled by typescript directly
    'no-undef': 'off',

    // Also will be handled by typescript directly
    'no-unused-vars': 'off',
  },

  overrides: [{
    files: ['*.d.ts'],
    rules: {
      'import/unambiguous': 'off',
      'init-declarations': 'off',
    },
  }],
};
