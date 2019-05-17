module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y',
    'standard-react'
  ].map(require.resolve),
};
