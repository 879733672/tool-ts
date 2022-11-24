module.exports = {
    title: 'tool-ts',
    base: '/',
    themeConfig: {
        logo: './logo.png',
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: 'API',
            link: '/api/'
        }, {
            text: '推荐库',
            link: '/tj/'
        }, {
            text: 'Github',
            link: 'https://github.com/879733672/tool-ts',
        }],
        sidebar: 'auto',
        sidebarDepth: 2
    },
    plugins: [
        [
            'cursor-effects', {
                size: 3, // size of the particle, default: 2
                shape: 'circle', // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            }
        ],
        [
            'copyright',
            {
                authorName: '小橙子', // 选中的文字将无法被复制
                minLength: 30, // 如果长度超过  30 个字符
            },
        ]
    ]
}