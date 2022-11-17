module.exports = {
    printWidth: 80,
    tabWidth: 4,
    singleQuote: true, // 使用单引号
    trailingComma: 'all',
    proseWrap: 'never',
    overrides: [{ files: '.prettierrc', options: { parser: 'json' } }],
};
