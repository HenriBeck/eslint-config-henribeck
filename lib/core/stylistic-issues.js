module.exports = {
  rules: {
    'array-bracket-newline': 'off',

    'array-bracket-spacing': 'off',

    'array-element-newline': 'off',

    'block-spacing': ['error', 'always'],

    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    camelcase: ['error', { properties: 'always' }],

    'capitalized-comments': ['error', 'always', {
      ignoreInlineComments: false,
      ignoreConsecutiveComments: true,
    }],

    'comma-dangle': ['error', 'always-multiline'],

    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],

    'comma-style': ['error', 'last'],

    'computed-property-spacing': ['error', 'never'],

    'consistent-this': ['error', 'that'],

    'eol-last': ['error', 'always'],

    'func-call-spacing': ['error', 'never'],

    'func-name-matching': ['error', 'always'],

    'func-names': ['error', 'always'],

    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    'function-paren-newline': ['error', 'consistent'],

    'id-blacklist': 'off',

    'id-length': ['error', {
      min: 2,
      properties: 'always',
      exceptions: [
        'x',
        'y',
        't',
      ],
    }],

    'id-match': 'off',

    'implicit-arrow-linebreak': ['error', 'beside'],

    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
    }],

    'jsx-quotes': ['error', 'prefer-double'],

    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],

    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],

    'line-comment-position': ['error', 'above'],

    'linebreak-style': ['error', 'unix'],

    'lines-around-comment': 'off',

    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    'max-depth': ['error', { max: 3 }],

    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      comments: 100,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    }],

    'max-lines': ['error', {
      max: 300,
      skipBlankLines: false,
      skipComments: false,
    }],

    'max-lines-per-function': ['error', {
      max: 30,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    'max-nested-callbacks': ['error', { max: 2 }],

    'max-params': ['error', { max: 3 }],

    'max-statements-per-line': ['error', { max: 1 }],

    'multiline-comment-style': ['error', 'separate-lines'],

    'max-statements': 'off',

    'multiline-ternary': 'off',

    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: true,
    }],

    'new-parens': 'error',

    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    'no-array-constructor': 'error',

    'no-bitwise': 'error',

    'no-continue': 'error',

    'no-inline-comments': 'error',

    'no-lonely-if': 'error',

    'no-mixed-operators': ['error', {
      allowSamePrecedence: true,
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    }],

    'no-mixed-spaces-and-tabs': 'error',

    'no-multi-assign': 'error',

    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],

    'no-negated-condition': 'error',

    'no-nested-ternary': 'error',

    'no-new-object': 'error',

    'no-plusplus': 'error',

    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
      'ContinueStatement',
    ],

    'no-tabs': 'error',

    'no-ternary': 'off',

    'no-trailing-spaces': ['error', { skipBlankLines: false }],

    'no-underscore-dangle': 'off',

    'no-unneeded-ternary': ['error', { defaultAssignment: true }],

    'no-whitespace-before-property': 'error',

    'nonblock-statement-body-position': ['error', 'beside'],

    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 2,
    }],

    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: false }],

    'one-var-declaration-per-line': ['error', 'always'],

    'one-var': ['error', 'never'],

    'operator-assignment': ['error', 'always'],

    'operator-linebreak': ['error', 'before'],

    'padded-blocks': ['error', 'never'],

    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'class',
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'if',
    }, {
      blankLine: 'always',
      prev: 'if',
      next: '*',
    }, {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*',
    }, {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    }],

    'prefer-object-spread': 'error',

    'quote-props': ['error', 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false,
    }],

    quotes: ['error', 'single', { avoidEscape: true }],

    'require-jsdoc': 'off',

    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],

    semi: ['error', 'always'],

    'semi-style': ['error', 'last'],

    'sort-keys': 'off',

    'sort-vars': 'off',

    'space-before-blocks': ['error', 'always'],

    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    'space-in-parens': ['error', 'never'],

    'space-infix-ops': 'error',

    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],

    'spaced-comment': ['error', 'always', { block: { balanced: true } }],

    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],

    'template-tag-spacing': ['error', 'never'],

    'unicode-bom': ['error', 'never'],

    'wrap-regex': 'off',
  },
};
