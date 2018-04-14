module.exports = {
  extends: [
    './index.js',
    './client.js',
    './server.js',
  ],

  rules: {
    'max-lines': 'off',

    'import/no-commonjs': 'off',

    'import/unambiguous': 'off',
  }
};