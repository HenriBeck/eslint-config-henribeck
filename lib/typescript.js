module.exports = {
  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    '@typescript-eslint/array-type': ['error', 'array-simple'],

    '@typescript-eslint/ban-types': 'off',

    '@typescript-eslint/camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: false,
    }],

    '@typescript-eslint/class-name-casing': 'error',

    '@typescript-eslint/explicit-function-return-type': ['off', { allowExpressions: false }],

    '@typescript-eslint/explicit-member-accessibility': 'error',

    '@typescript-eslint/generic-type-naming': ['error', '^[A-Z][a-z]+([A-Z][a-z]+)*$'],

    '@typescript-eslint/indent': ['error', 2, {
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

    '@typescript-eslint/interface-name-prefix': ['error', 'never'],

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],

    '@typescript-eslint/member-naming': 'off',

    '@typescript-eslint/member-ordering': ['error', {
      default: [
        'static-field',
        'static-method',
        'instance-field',
        'constructor',
        'instance-method',
      ],
    }],

    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

    '@typescript-eslint/no-array-constructor': 'error',

    '@typescript-eslint/no-empty-interface': 'error',

    '@typescript-eslint/no-explicit-any': 'warn',

    '@typescript-eslint/no-extraneous-class': ['error', {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
    }],

    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreProperties: false,
      ignoreParameters: false,
    }],

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-namespace': ['error', {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    }],

    '@typescript-eslint/no-non-null-assertion': 'error',

    '@typescript-eslint/no-object-literal-type-assertion': 'error',

    '@typescript-eslint/no-parameter-properties': 'error',

    // Turned off for now
    '@typescript-eslint/no-this-alias': 'off',

    '@typescript-eslint/no-triple-slash-reference': 'error',

    // Turned off for now
    '@typescript-eslint/no-type-alias': ['off', {
      allowAliases: 'in-unions-and-intersections',
      allowCallbacks: 'always',
      allowLiterals: 'never',
      allowMappedTypes: 'always',
    }],

    // This is handled by typescript
    '@typescript-eslint/no-unused-vars': ['off', {
      vars: 'all',
      args: 'all',
      ignoreRestSiblings: false,
      caughtErrors: 'all',
    }],

    '@typescript-eslint/no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: true,
      typedefs: true,
    }],

    '@typescript-eslint/no-var-requires': 'error',

    '@typescript-eslint/prefer-interface': 'error',

    '@typescript-eslint/prefer-namespace-keyword': 'off',

    '@typescript-eslint/type-annotation-spacing': 'error',
  },
};
