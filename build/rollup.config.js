import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve'; // Rollup 如何查找外部模块, 其他插件转换你的模块之前 - 这是为了防止其他插件的改变破坏CommonJS的检测
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs'; // CommonJS模块转换为 ES2015 供 Rollup 处理
import eslint from '@rollup/plugin-eslint';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import { join } from 'path';
import omit from 'lodash/omit';
import pkg from '../package.json';
const resolveFile = (filePath) => {
    return join(__dirname, '..', filePath);
};
const isDev = process.env.NODE_ENV !== 'production';
const { name: PROJECT, version: VERSION } = pkg;
const DATE = new Date();
// 通过控制outputs中对应的isExternal、isUglify值来决定打包的文件是否启用external和uglify
const outputs = [
    {
        file: 'lib/index.js',
        format: 'cjs',
        isExternal: true,
        exports: 'auto',
    },
    {
        file: 'es/index.js',
        format: 'es',
        isExternal: true,
    },
    {
        file: 'dist/index.js',
        format: 'umd',
        name: 'tool',
        globals: {
            lodash: '_'
        },
        isExternal: true,
    },
    {
        file: 'dist/index.min.js',
        format: 'umd', //  五种输出格式：amd /  es / iife / umd / cjs
        name: 'tool', // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=.
        isUglify: true,
        isExternal: true, // 外部是否打包进去，true不打包进去
        globals: {
            lodash: '_'
        },
    },
].map((i) => {
    i.sourcemap = isDev; // 生成bundle.map.js文件，方便调试
    return i;
});

const len = outputs.length;

const config = outputs.map((output, i) => {
    const isUglify = output?.isUglify || false;
    const isExternal = output?.isExternal || false;
    return {
        input: resolveFile('src/index.ts'),
        output: omit(output, ['isUglify', 'isExternal']),
        plugins: [
            resolve(),
            json(),
            commonjs(),
            typescript(),
            eslint({
                throwOnError: true,
                throwOnWarning: true,
                include: ['src/**'],
                exclude: ['node_modules/**'],
            }),
            babel({
                exclude: 'node_modules/**', // 只编译源码
                babelHelpers: 'runtime' // 使plugin-transform-runtime生效
            }),
            ...(isDev && i === len - 1
                ? [
                    serve({
                        // 使用开发服务插件
                        port: 3001,
                        openPage: '/public/index.html', // 打开的是哪个文件
                        open: true, // 默认打开浏览器
                        // 设置 exmaple的访问目录和dist的访问目录
                        contentBase: [
                            resolveFile('example'),
                            resolveFile('dist'),
                            resolveFile('public'),
                        ],
                    }),
                ]
                : isUglify
                    ? [
                        terser({
                            compress: {
                                // remove console.log
                                pure_funcs: ['console.log'],
                            },
                            output: {
                                // add comment on the top
                                preamble: `/*! ${PROJECT} - v${VERSION} - ${DATE} https://github.com/879733672/tool-ts#readme */`,
                            },
                        }),
                    ]
                    : []),
        ],
        // 作用：指出应将哪些模块视为外部模块，否则会被打包进最终的代码里
        // external: id => /lodash/.test(id) // 也可以使用这种方式
        external: (id) => {
            return !isExternal
                ? false
                : /@babel\/runtime/.test(id) || /lodash/.test(id);
        },
    };
});

export default config;
