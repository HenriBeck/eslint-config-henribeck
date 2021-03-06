module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': ['error', '(([A-Z][a-z]+)+|[a-z0-9-.]+)(.spec)?$'],

    'filenames/match-exported': ['error', [null, 'kebab'], null, false],

    'filenames/no-index': 'off',
  },
};
