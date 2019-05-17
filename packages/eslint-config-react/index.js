module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y',
    'eslint-config-standard-react'
  ].map(require.resolve),
};
