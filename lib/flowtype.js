module.exports = {
  plugins: ['flowtype'],

  settings: { flowtype: { onlyFilesWithFlowAnnotation: false } },

  overrides: [{
    files: [
      'flow-typed/*.js',
      'flow-typed/**/*.js',
    ],
    env: { node: true },
    rules: {
      'import/unambiguous': 'off',
      'import/no-extraneous-dependencies': 'off',
      'flowtype/require-types-at-top': 'off',
      'max-lines': 'off',
    },
  }],

  rules: {
    'flowtype/array-style-complex-type': ['error', 'verbose'],

    'flowtype/array-style-simple-type': ['error', 'shorthand'],

    'flowtype/boolean-style': ['error', 'boolean'],

    'flowtype/define-flow-type': 'error',

    'flowtype/delimiter-dangle': ['error', 'always-multiline'],

    'flowtype/generic-spacing': ['error', 'never'],

    'flowtype/no-dupe-keys': 'error',

    'flowtype/no-primitive-constructor-types': 'error',

    'flowtype/no-types-missing-file-annotation': 'error',

    'flowtype/object-type-delimiter': ['error', 'comma'],

    'flowtype/no-weak-types': 'error',

    'flowtype/require-exact-type': 'off',

    'flowtype/require-parameter-type': 'off',

    'flowtype/require-return-type': 'off',

    'flowtype/require-valid-file-annotation': ['error', 'always', { annotationStyle: 'line' }],

    'flowtype/semi': ['error', 'always'],

    'flowtype/sort-keys': 'off',

    'flowtype/space-before-type-colon': ['error', 'never'],

    'flowtype/space-after-type-colon': ['error', 'always', { allowLineBreak: false }],

    'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]*)+$'],

    'flowtype/union-intersection-spacing': ['error', 'always'],

    'flowtype/use-flow-type': 'error',

    'flowtype/newline-after-flow-annotation': ['error', 'always'],

    'flowtype/no-existential-type': 'error',

    'flowtype/no-mutable-array': 'error',

    'flowtype/no-unused-expressions': 'error',

    'flowtype/type-import-style': ['error', 'identifier'],

    'flowtype/space-before-generic-bracket': ['error', 'never'],

    'flowtype/require-variable-type': 'off',

    'flowtype/no-flow-fix-me-comments': 'warn',

    'flowtype/require-types-at-top': ['error', 'always'],
    
    'flowtype/require-compound-type-alias': ['error', 'always'],
  },
};
