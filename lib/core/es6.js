module.exports = {
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],

    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],

    'constructor-super': 'error',

    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],

    'no-class-assign': 'error',

    'no-confusing-arrow': ['error', { allowParens: true }],

    'no-const-assign': 'error',

    'no-dupe-class-members': 'error',

    'no-duplicate-imports': ['error', { includeExports: true }],

    'no-new-symbol': 'error',

    'no-restricted-imports': 'error',

    'no-this-before-super': 'error',

    'no-useless-computed-key': 'error',

    'no-useless-constructor': 'error',

    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    'no-var': 'error',

    'object-shorthand': ['error', 'always', {
      avoidQuotes: false,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: true,
    }],

    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],

    'prefer-numeric-literals': 'error',

    'prefer-rest-params': 'error',

    'prefer-spread': 'error',

    'prefer-template': 'error',

    'require-yield': 'error',

    'rest-spread-spacing': ['error', 'never'],

    'sort-imports': 'off',

    'symbol-description': 'error',

    'template-curly-spacing': ['error', 'never'],

    'yield-star-spacing': ['error', {
      before: false,
      after: true,
    }],

    'prefer-destructuring': ['off', {
      array: false,
      object: true,
    }, { enforceForRenamedProperties: true }],
  },
};
