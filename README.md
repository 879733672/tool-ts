## tool-ts 常用工具库

### 简介

前面使用了 rollup 搭建了库基础的工具库，想着是通用的工具库，代码提示这方面，不如 ts 支持的好，所以改成 ts 版本搭建，增强代码的可维护性, 并加入 jest 测试。 搭建采用 rollup3, 因为 3.0 版本，并且注意官网把很多插件移动到了@rollup 下。[rollup 部分插件地址](https://github.com/rollup/plugins/tree/master/packages)

#### 基于 tool 通用工具库，采用 rollup 进行打包。[地址](https://github.com/879733672/tool)

-   环境安装 pnpm
    ```
    npm install -g pnpm
    pnpm config set registry https://registry.npmmirror.com
    ```
-   打包常用命令

    ```
    npm run start // 本地启动开发模式 isExternal 默认排除其它外部引用（如 jquery，lodash），需要自己 build 下修改配置 npm run build // 生产打包模式 打包生成 es、cjs、umd、umd（min）代码压缩文件

    npm run lint // eslint 检查 npm run lint:fix // eslint 检查并自动修复 npm run format // 自动格式化代码

    npm run test // 测试 npm run test-c // 生成代码覆盖率报告

    npm run tag  // 在此基础上升级版本，并写入日志，打包tag
    npm run push:tag // 推送tag到git

    npm run daily // 日常提交代码
    npm run npublish  // 提交发布npm

    npm run build:types  // 打包类型文件
    npm run doc  // 根据类型文件生成文档

    ```

#### 目录结构

```
tool-ts
├── CHANGELOG.md
├── README.md
├── api-extractor.json
├── build
│   └── rollup.config.js   // 打包配置文件
├── commitlint.config.js
├── dist
│   ├── index.d.ts
│   ├── index.js
│   └── index.min.js
├── es
│   ├── index.d.ts
│   └── index.js
├── jest.config.js
├── lib
│   ├── index.d.ts
│   └── index.js
├── package.json
├── pnpm-lock.yaml
├── public
│   └── index.html
├── src
│   └── index.ts
├── test
│   └── index.spec.ts
└── tsconfig.json
```

#### API 介绍

-   verify 校验模块

| 名称     | 参数             | 备注                                |
| -------- | ---------------- | ----------------------------------- |
| isEmail  | string           | 是否邮箱                            |
| isMobile | string or number | 是否验证手机号码                    |
| isPhone  | string or number | 是否电话号码                        |
| isUrl    | string           | 是否 url 地址                       |
| isColor  | string           | 判断是否为 16 进制颜色，rgb 或 rgba |
| isIdCard | string or number | 判断是否为身份证号                  |

| random | number | string | 生成默认 6 位随即数|
