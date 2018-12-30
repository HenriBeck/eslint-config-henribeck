module.exports = {
  plugins: ['react'],

  parserOptions: { ecmaFeatures: { jsx: true } },

  rules: {
    'react/jsx-props-no-multi-spaces': 'error',

    'react/jsx-child-element-spacing': 'off',

    'react/destructuring-assignment': ['off', 'never', { ignoreClassFields: true }],

    'react/jsx-one-expression-per-line': 'off',

    'react/no-access-state-in-setstate': 'error',

    'react/button-has-type': 'off',

    'react/boolean-prop-naming': ['off', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],

    // We allow required default props here for flow
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],

    'react/jsx-closing-tag-location': 'error',

    'react/no-redundant-should-component-update': 'error',

    'react/display-name': ['off', { ignoreTranspilerName: false }],

    'react/forbid-component-props': 'off',

    'react/forbid-dom-props': 'off',

    'react/forbid-elements': 'off',

    'react/forbid-foreign-prop-types': 'error',

    'react/forbid-prop-types': ['error', { forbid: ['array', 'any', 'object'] }],

    'react/jsx-boolean-value': 'error',

    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],

    'react/jsx-curly-spacing': ['error', 'never', {
      allowMultiline: false,
      spacing: { objectLiterals: 'never' },
    }],

    'react/jsx-curly-brace-presence': ['error', 'never'],

    'react/jsx-equals-spacing': ['error', 'never'],

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    'react/jsx-indent-props': ['error', 2],

    'react/jsx-indent': ['error', 2],

    'react/jsx-key': 'error',

    'react/jsx-max-depth': ['error', { max: 5 }],

    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],

    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: false,
      allowBind: false,
    }],

    'react/jsx-no-comment-textnodes': 'error',

    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

    'react/jsx-no-literals': 'off',

    'react/jsx-no-target-blank': 'error',

    'react/jsx-no-undef': 'error',

    'react/jsx-fragment': ['error', 'element'],

    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      ignore: [],
    }],

    'react/jsx-sort-default-props': ['off'],

    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],

    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
    }],

    'react/jsx-uses-react': 'error',

    'react/jsx-uses-vars': 'error',

    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

    'react/no-array-index-key': 'error',

    'react/no-children-prop': 'error',

    'react/no-danger-with-children': 'error',

    'react/no-danger': 'error',

    'react/no-deprecated': 'error',

    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],

    'react/no-did-update-set-state': ['error', 'disallow-in-func'],

    'react/no-direct-mutation-state': 'error',

    'react/no-find-dom-node': 'error',

    'react/no-is-mounted': 'error',

    'react/no-multi-comp': ['error', { ignoreStateless: false }],

    'react/no-render-return-value': 'error',

    'react/no-set-state': 'off',

    'react/no-string-refs': 'error',

    'react/no-this-in-sfc': 'error',

    'react/no-typos': 'error',

    'react/no-unescaped-entities': 'error',

    'react/no-unknown-property': ['error', { ignore: [] }],

    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: false,
    }],

    'react/no-unused-state': 'error',

    'react/prefer-es6-class': ['error', 'always'],

    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: false },
    ],

    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    }],

    'react/react-in-jsx-scope': 'error',

    'react/require-default-props': ['error', { forbidDefaultForRequired: false }],

    'react/require-optimization': ['error', { allowDecorators: [] }],

    'react/require-render-return': 'error',

    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],

    'react/sort-comp': [
      'error', {
        order: [
          'propTypes',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'getDerivedStateFromProps',
          'static-methods',
          'state',
          'type-annotations',
          'instance-variables',
          'constructor',
          'getters',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
          'everything-else',
          '/^handle.+$/',
          '/^render.+$/',
          'render',
        ],
      },
    ],

    'react/sort-prop-types': ['off', {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true,
      sortShapeProp: true,
    }],

    'react/style-prop-object': 'error',

    'react/void-dom-elements-no-children': 'error',

    'react/no-will-update-set-state': ['error', 'disallow-in-func'],

    'react/no-unsafe': 'error',
  },
};
