module.exports = {
  extends: ['./lib/flowtype.js'],

  rules: {
    // Turn off group export for flow projects as this can clash with exporting types
    'import/group-exports': 'off',
  },
};
