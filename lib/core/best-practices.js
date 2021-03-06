module.exports = {
  rules: {
    'accessor-pairs': ['error', {
      setWithoutGet: true,
      getWithoutSet: false,
    }],

    'array-callback-return': 'error',

    'block-scoped-var': 'error',

    'class-methods-use-this': 'off',

    complexity: ['error', { max: 12 }],

    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],

    curly: ['error', 'all'],

    'default-case': 'error',

    'dot-location': ['error', 'property'],

    'dot-notation': ['error', {
      allowKeywords: true,
      allowPattern: '^w+((.|-)w+)+$',
    }],

    eqeqeq: ['error', 'always'],

    'guard-for-in': 'error',

    'max-classes-per-file': ['error', 1],

    'no-alert': 'error',

    'no-caller': 'error',

    'no-case-declarations': 'error',

    'no-div-regex': 'error',

    'no-else-return': 'error',

    'no-empty-function': ['error'],

    'no-empty-pattern': 'error',

    'no-eq-null': 'error',

    'no-eval': ['error', { allowIndirect: false }],

    'no-extend-native': 'error',

    'no-extra-bind': 'error',

    'no-extra-label': 'error',

    'no-fallthrough': 'error',

    'no-floating-decimal': 'error',

    'no-global-assign': 'error',

    'no-implicit-coercion': ['error', {
      boolean: true,
      string: true,
      number: true,
      allow: [],
    }],

    'no-implicit-globals': 'error',

    'no-implied-eval': 'error',

    'no-invalid-this': 'off',

    'no-iterator': 'error',

    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false,
    }],

    'no-lone-blocks': 'error',

    'no-loop-func': 'error',

    'no-magic-numbers': 'off',

    'no-multi-spaces': ['error', { exceptions: { Property: false } }],

    'no-multi-str': 'error',

    'no-new-func': 'error',

    'no-new-wrappers': 'error',

    'no-new': 'error',

    'no-octal-escape': 'error',

    'no-octal': 'error',

    'no-param-reassign': ['error', { props: true }],

    'no-proto': 'error',

    'no-redeclare': ['error', { builtinGlobals: true }],

    'no-restricted-properties': ['error'],

    'no-return-assign': ['error', 'always'],

    'no-return-await': 'error',

    'no-script-url': 'error',

    'no-self-assign': ['error', { props: true }],

    'no-self-compare': 'error',

    'no-sequences': 'error',

    'no-throw-literal': 'error',

    'no-unmodified-loop-condition': 'error',

    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    'no-unused-labels': 'error',

    'no-useless-catch': 'error',

    'no-useless-call': 'error',

    'no-useless-concat': 'error',

    'no-useless-escape': 'error',

    'no-useless-return': 'error',

    'no-void': 'error',

    'no-warning-comments': ['warn', {
      location: 'start',
      terms: ['fixme', 'fix', 'todo'],
    }],

    'no-with': 'error',

    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],

    radix: ['error', 'always'],

    'require-await': 'error',

    'require-unicode-regexp': 'off',

    'vars-on-top': 'error',

    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

    yoda: ['error', 'never', {
      exceptRange: true,
      onlyEquality: true,
    }],
  },
};
