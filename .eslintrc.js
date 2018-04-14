module.exports = {
  extends: [
    './index.js',
    './client.js',
    './server.js',
  ],

  rules: {
    'import/no-commonjs': 'off',

    'import/unambiguous': 'off',
  }
};