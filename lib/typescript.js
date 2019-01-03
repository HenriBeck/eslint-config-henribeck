module.exports = {
  plugins: ['typescript'],

  rules: {
    'typescript/adjacent-overload-signatures': 'error',

    'typescript/array-type': ['error', 'array-simple'],

    'typescript/ban-types': 'off',

    'typescript/camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: false,
    }],

    'typescript/class-name-casing': 'error',

    'typescript/explicit-function-return-type': ['off', { allowExpressions: false }],

    'typescript/explicit-member-accessibility': 'error',

    'typescript/generic-type-naming': ['error', '^[A-Z][a-z]+([A-Z][a-z]+)*$'],

    'typescript/indent': ['error', 2, {
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

    'typescript/interface-name-prefix': ['error', 'never'],

    'typescript/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],

    'typescript/member-naming': 'off',

    'typescript/member-ordering': ['error', {
      default: [
        'static-field',
        'static-method',
        'instance-field',
        'constructor',
        'instance-method',
      ],
    }],

    'typescript/no-angle-bracket-type-assertion': 'error',

    'typescript/no-array-constructor': 'error',

    'typescript/no-empty-interface': 'error',

    'typescript/no-explicit-any': 'warn',

    'typescript/no-extraneous-class': ['error', {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
    }],

    'typescript/no-inferrable-types': ['error', {
      ignoreProperties: false,
      ignoreParameters: false,
    }],

    'typescript/no-misused-new': 'error',

    'typescript/no-namespace': ['error', {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    }],

    'typescript/no-non-null-assertion': 'error',

    'typescript/no-object-literal-type-assertion': 'error',

    'typescript/no-parameter-properties': 'error',

    // Turned off for now
    'typescript/no-this-alias': 'off',

    'typescript/no-triple-slash-reference': 'error',

    // Turned off for now
    'typescript/no-type-alias': ['off', {
      allowAliases: 'in-unions-and-intersections',
      allowCallbacks: 'always',
      allowLiterals: 'never',
      allowMappedTypes: 'always',
    }],

    // This is handled by typescript
    'typescript/no-unused-vars': ['off', {
      vars: 'all',
      args: 'all',
      ignoreRestSiblings: false,
      caughtErrors: 'all',
    }],

    'typescript/no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: true,
      typedefs: true,
    }],

    'typescript/no-var-requires': 'error',

    'typescript/prefer-interface': 'error',

    'typescript/prefer-namespace-keyword': 'off',

    'typescript/type-annotation-spacing': 'error',
  },
};
