module.exports = {
  plugins: ['flowtype-errors'],

  rules: {
    'flowtype-errors/show-errors': 'error',
    'flowtype-errors/show-warnings': 'warn',
    'flowtype-errors/min-coverage': 'off',
  },
};