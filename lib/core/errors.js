module.exports = {
  rules: {
    'for-direction': 'error',

    'getter-return': ['error', { allowImplicit: false }],

    'no-await-in-loop': 'error',

    'no-compare-neg-zero': 'error',

    'no-cond-assign': ['error', 'always'],

    'no-console': 'error',

    'no-constant-condition': ['error', { checkLoops: true }],

    'no-control-regex': 'error',

    'no-debugger': 'error',

    'no-dupe-args': 'error',

    'no-dupe-keys': 'error',

    'no-duplicate-case': 'error',

    'no-empty-character-class': 'error',

    'no-empty': ['error', { allowEmptyCatch: false }],

    'no-ex-assign': 'error',

    'no-extra-boolean-cast': 'error',

    'no-extra-parens': ['error', 'all', {
      ignoreJSX: 'all',
      conditionalAssign: true,
      returnAssign: true,
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false,
    }],

    'no-extra-semi': 'error',

    'no-func-assign': 'error',

    'no-inner-declarations': ['error', 'both'],

    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],

    'no-irregular-whitespace': ['error', {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
    }],

    'no-obj-calls': 'error',

    'no-prototype-builtins': 'error',

    'no-regex-spaces': 'error',

    'no-sparse-arrays': 'error',

    'no-template-curly-in-string': 'error',

    'no-unexpected-multiline': 'error',

    'no-unreachable': 'error',

    'no-unsafe-finally': 'error',

    'no-unsafe-negation': 'error',

    'use-isnan': 'error',

    'valid-jsdoc': 'off',

    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
