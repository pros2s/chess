module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order/error'],
  rules: {
    'media-feature-range-notation': 'prefix',
    'declaration-empty-line-before': null,
    'import-notation': 'string',
    'no-invalid-double-slash-comments': null,
  },
};
