module.exports = {
    env: {
        es2021: true,
        amd: true, // 否则会出现'require' is not defined 提示
        es6: true,
        browser: true,
        jquery: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        'no-unused-vars': 'off',
        'no-console': 'warn',
        semi: 'warn',
        //关闭“禁用console”规则
        //缩进不规范警告，要求缩进为2个空格，默认值为4个空格
        indent: [
            'warn',
            4,
            {
                //设置为1时强制switch语句中case的缩进为2个空格
                SwitchCase: 1,
            },
        ],
        // 函数定义时括号前面要不要有空格
        'space-before-function-paren': [0, 'always'],
        //定义字符串不规范错误，要求字符串使用双引号
        // quotes: ["error", "double"],
        //....
        //更多规则可查看http://eslint.cn/docs/rules/
    },
};
