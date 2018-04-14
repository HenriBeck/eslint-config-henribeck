module.exports = {
  plugins: ['promise'],

  rules: {
    'promise/catch-or-return': ['error', { allowThen: false }],

    'promise/no-return-wrap': ['error', { allowReject: true }],

    'promise/param-names': 'error',

    'promise/always-return': 'error',

    'promise/no-native': 'off',

    'promise/no-nesting': 'error',

    'promise/no-promise-in-callback': 'error',

    'promise/no-callback-in-promise': 'error',

    'promise/no-return-in-finally': 'error',

    'promise/avoid-new': 'error',

    'promise/no-new-statics': 'error',

    'promise/valid-params': 'error',

    'promise/prefer-await-to-then': 'error',

    'promise/prefer-await-to-callbacks': 'error',
  },
};
