module.exports = {
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },

  plugins: ['import'],

  rules: {
    'import/dynamic-import-chunkname': 'error',

    'import/no-unresolved': ['error', { commonjs: true }],

    'import/named': 'error',

    'import/default': 'error',

    'import/namespace': ['error', { allowComputed: false }],

    'import/no-restricted-paths': 'off',

    'import/no-absolute-path': 'error',

    'import/no-dynamic-require': 'error',

    'import/no-internal-modules': 'off',

    'import/no-relative-parent-imports': 'off',

    'import/no-webpack-loader-syntax': 'error',

    'import/no-self-import': 'error',

    'import/no-cycle': 'off',

    'import/export': 'error',

    'import/no-named-as-default': 'error',

    'import/no-named-as-default-member': 'error',

    'import/no-deprecated': 'error',

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.spec.js',
        '**/*.test.js',
        '**/__tests__/*',
        'tests/**',
        '.storybook/**',
        '**/stories.jsx',
        '*.config.js',
        'scripts/*.js',
        'scripts/**/*.js',
      ],
      peerDependencies: true,
    }],

    'import/no-mutable-exports': 'error',

    'import/unambiguous': 'error',

    'import/no-commonjs': 'error',

    'import/no-amd': 'error',

    'import/no-nodejs-modules': 'off',

    'import/first': 'error',

    'import/exports-last': 'error',

    'import/no-duplicates': 'error',

    'import/no-namespace': 'error',

    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    'import/order': ['error', {
      groups: [
        ['builtin', 'external', 'internal'],
        'parent',
        ['index', 'sibling'],
      ],
      'newlines-between': 'always',
    }],

    'import/newline-after-import': 'error',

    'import/prefer-default-export': 'off',

    'import/max-dependencies': 'off',

    'import/no-unassigned-import': 'off',

    'import/no-named-default': 'error',

    'import/no-default-export': 'off',

    'import/no-useless-path-segments': 'error',

    'import/no-anonymous-default-export': ['error', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: true,
    }],

    'import/group-exports': 'off',
  },
};
