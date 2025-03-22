# 快速开始



## 安装



#### 必需的前置条件

- [Node.js](https://nodejs.org/) >= 16
- CLI

通常来说， minmini 通过配置后可以安装在大部分的现有项目中。默认 BaseDir 为 `src/` 目录，outDir 为 `minOutput/` 目录。

::: code-group

```sh [npm]
npm install -D minmini
```

```sh [pnpm]
pnpm install -D minmini
```

```sh [yarn]
yarn install -D minmini
```

:::



如果仅仅是在本地使用，则可以使用全局安装。

::: code-group

```sh [npm]
npm install -g minmini
```

```sh [pnpm]
pnpm install -g minmini
```

```sh [yarn]
yarn install -g minmini
```

:::



## 输出

没有其它命令，也没有其它参数，如果没有 minmini.config.json 或为空时，默认情况下 minmini 会开始压缩 `src/` 目录下的所有文件，并输出到 `minOutput/` 目录下。

::: code-group

```sh [install -D]
npx minmini build
```

```sh [install -g]
minmini build
```

:::



## 使用 ESM

如果在 .js 文件中调用，那么 minmini.config.json 会被忽略，可以将配置直接传递。

```js
import minmini from 'minmini';

await minmini({
   baseDir: 'src/',
   outDir: 'minOutput/'
   // ...config
});
```

- [配置项](../config/)



## 文件结构

```
.
├─ minmini.config.json
├─ src <minmini.config.json.baseDir>
│  ├─ index.html
│  ├─ main.js
│  ├─ main.xml
│  ├─ main.json
│  └─ main.css
└─ minOutput <minmini.config.json.outDir>
   ├─ index.html
   ├─ main.js
   ├─ main.xml
   ├─ main.json
   └─ main.css
```
