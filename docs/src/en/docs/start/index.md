# Get started quickly



## Installation



#### Required prerequisites

- [Node.js](https://nodejs.org/) >= 18
- CLI

In general, minmini can be configured to be installed in most existing projects. The default baseDir is the `src/` directory and outDir is the `minOutput/` directory.

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



If you're just using it locally, you can use a global installation.

```sh
npm install -g minmini
```



## Output

There are no other commands, no other parameters, if there is no minmini.config.json or if it is empty, by default minmini will start compressing all files in the `src/` directory and output them to the `minOutput/` directory.

::: code-group

```sh [install -D]
npx minmini build
```

```sh [install -g]
minmini build
```

:::



## Use ESM

If it's called in a .js file, then minmini.config.json is ignored and the configuration can be passed directly.

```js
import minmini from 'minmini';

await minmini({
   baseDir: 'src/',
   outDir: 'minOutput/'
   // ...config
});
```

- [Configuration items](../config/)



## File structure

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
