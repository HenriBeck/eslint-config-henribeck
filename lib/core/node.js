module.exports = {
  rules: {
    'callback-return': ['error', [
      'callback',
      'next',
      'cb',
      'done',
    ]],

    'global-require': 'error',

    'handle-callback-err': ['error', '^(err|error)$'],

    'no-buffer-constructor': 'error',

    'no-mixed-requires': ['error', {
      grouping: false,
      allowCall: false,
    }],

    'no-new-require': 'error',

    'no-path-concat': 'error',

    'no-process-env': 'error',

    'no-process-exit': 'off',

    'no-restricted-modules': 'error',

    'no-sync': 'error',
  },
};
