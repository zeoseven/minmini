# 配置项

minmini 继承了 [依赖](../#依赖) 的部分配置项。



## 影响范围

- `config.html.*` ==> .html, .htm
- `config.css.*` ==> .css, .html&lt;style&gt;, .htm&lt;style&gt;
- `config.js.*` ==> .js, .html&lt;script&gt;, .htm&lt;script&gt;
- `config.json.*` ==> .json
- `config.xml.*` ==> .xml, .svg



## outDir

指定输出目录，压缩完成的生产文件将会输出到该目录。

`String` `config.outDir || "minOutput/"`

```json
{
    "outDir": "example-output-folder/"
}
```



## baseDir

指定输入目录，压缩前需要处理的文件将会从该目录读取。

`String` `config.baseDir || "src/"`

```json
{
    "baseDir": "example-input-folder/"
}
```



## cleanOutDir

压缩前先删除旧的输出。

`Boolean` `config.cleanOutDir || true`

```json
{
    "cleanOutDir": false
}
```



## ignorePaths

基于 baseDir 忽略目录，不计入文件总数，直接复制到输出目录。

`Array` `config.ignorePaths || undefined`

```json
{
    "ignorePaths": [
        "node_modules",
        "app",
        "sub/dir"
    ]
}
```



## html.noMinify

如果为 true ，则不压缩 .html 和 .htm 文件，直接复制到输出目录。

`Boolean` `config.html.noMinify || undefined`

```json
{
    "html": {
        "noMinify": true
    }
}
```



## html.minifyCSS

如果为 false ，则不压缩 .html 和 .htm 文件中 style 标签中的 CSS 代码以及 style="" 中的内联样式。

`Boolean` `config.html.minifyCSS || true`

```json
{
    "html": {
        "minifyCSS": false
    }
}
```



## html.minifyJS

如果为 false ，则不压缩 .html 和 .htm 文件中 script 标签中的 JS 代码。

`Boolean` `config.html.minifyJS || true`

```json
{
    "html": {
        "minifyJS": false
    }
}
```



## html.noMinifyInlineStyles

不再对 style="" 值进行压缩。

`Boolean` `config.noMinifyInlineStyles || false`

```json
{
    "noMinifyInlineStyles": true
}
```



## html.caseSensitive

如果为 false，则 HTML 属性不区分大小写。

`Boolean` `config.html.caseSensitive || true`

```json
{
    "html": {
        "caseSensitive": false
    }
}
```



## html.collapseBooleanAttributes

如果为 true，则压缩 HTML 中的布尔属性，省略属性的值，如 disabled="disabled" 将被压缩为 disabled。

`Boolean` `config.html.collapseBooleanAttributes || true`

```json
{
    "html": {
        "collapseBooleanAttributes": false
    }
}
```


## html.collapseWhitespace

如果为 true，则压缩 HTML 中的空白，如 &lt;h1&gt; <span style="padding: 0 1rem;">title</span> &lt;/h1&gt; 将被压缩为 &lt;h1&gt;title&lt;/h1&gt;。这不会影响 script, style, textarea, pre 等标签中的重要空白。

`Boolean` `config.html.collapseWhitespace || true`

```json
{
    "html": {
        "collapseWhitespace": false
    }
}
```



## html.conservativeCollapse

如果为 true，则在压缩 HTML 遇到空白时，始终保留 1 个空格。它必须和 [html.collapseWhitespace](#html-collapsewhitespace) 一起使用。影响范围和 html.collapseWhitespace 一致。

`Boolean` `config.html.conservativeCollapse || false`

```json
{
    "html": {
        "conservativeCollapse": true
    }
}
```



## html.decodeEntities

尽可能将 HTML 实体解码为 Unicode 字符。

`Boolean` `config.html.decodeEntities || false`

```json
{
    "html": {
        "decodeEntities": true
    }
}
```



## html.html5

使用 HTML5 规范解析。

`Boolean` `config.html.html5 || true`

```json
{
    "html": {
        "html5": false
    }
}
```



## html.removeComments

移除 HTML 中的注释。

`Boolean` `config.html.removeComments || true`

```json
{
    "html": {
        "removeComments": false
    }
}
```



## html.removeEmptyAttributes

移除 HTML 中可安全移除的空属性，不会移除必需的属性，如 img[src=""] 等。

`Boolean` `config.html.removeEmptyAttributes || true`

```json
{
    "html": {
        "removeEmptyAttributes": false
    }
}
```



## html.removeScriptTypeAttributes

&lt;script type="text/javascript"&gt; 将被压缩为 &lt;script&gt;，其它 type 属性值不变。

`Boolean` `config.html.removeScriptTypeAttributes || false`

```json
{
    "html": {
        "removeScriptTypeAttributes": true
    }
}
```



## html.removeStyleLinkTypeAttributes

删除 link 和 style 的 type="text/css" 属性，其它 type 属性值不变。

`Boolean` `config.html.removeStyleLinkTypeAttributes || false`

```json
{
    "html": {
        "removeStyleLinkTypeAttributes": true
    }
}
```



## html.keepClosingSlash

保留 HTML 中的斜杠，如 &lt;br /&gt; 将不会压缩为 &lt;br&gt; 而是 &lt;br /&gt;。

`Boolean` `config.html.keepClosingSlash || true`

```json
{
    "html": {
        "keepClosingSlash": false
    }
}
```



## css.noMinify

不压缩 .css 文件，直接复制到输出目录。

`Boolean` `config.css.noMinify || false`

```json
{
    "css": {
        "noMinify": true
    }
}
```



## css.sourceMap

在输出目录中生成 .css.map 文件。

`Boolean` `config.css.sourceMap || false`

```json
{
    "css": {
        "sourceMap": true
    }
}
```



## css.sourceMapInlineSources

将 CSS 内容放入 .map 文件中。

`Boolean` `config.css.sourceMapInlineSources || true`

```json
{
    "css": {
        "sourceMapInlineSources": false
    }
}
```



## css.compatibility

压缩 CSS 和 style 标签的兼容性设置，不会影响 style="" 内联样式的压缩算法。

`String` `config.css.compatibility || "*"`

| Value | Description |
| ----  | ----------- |
|   *   | 兼容 IE10+ |
|   ie9 | 兼容 IE9+ |
|   ie8 | 兼容 IE8+ |
|   ie7 | 兼容 IE7+ |

```json
{
    "css": {
        "compatibility": "ie9"
    }
}
```



## css.level

压缩 CSS 和 style 标签的优化级别，不会影响 style="" 内联样式的压缩算法。

`Number` `config.css.level || 1`

| Value | Description |
| :---: | ----------- |
|   0   | 无优化，通常被认为是安全的，保留注释 |
|   1   | 使用较为安全的优化，不保留注释 |
|   2   | 可能删除、移动、重组规则，可能出现问题，不保留注释 |

```json
{
    "css": {
        "level": 2
    }
}
```



## css.format

CSS 和 style 标签的输出格式。

`String` `config.css.format || false`

|    Value    | Description |
| :---------: | ----------- |
| keep-breaks | 保留换行符 |
|   beautify  | 美化输出，保持可读性 |

```json
{
    "css": {
        "format": "keep-breaks"
    }
}
```



## css.inline

将 @import 等引入的 CSS 文件内容直接内联到当前 CSS 文件或 style 标签中。

`Array | Boolean` `config.css.inline || false`

| Value | Description |
| :---: | ----------- |
| ["all"] | 内联所有引入的 CSS 文件 |
| ["local"] | 内联本地引入的 CSS 文件 |
| ["remote"] | 内联远程引入的 CSS 文件 |
| ["!&lt;String&gt;"] | 不内联特定源的 CSS 文件 |
| ["&lt;String&gt;"] | 内联特定源的 CSS 文件 |
| &lt;Boolean&gt; false | 保留 @import 语句 |


```json
{
    "css": {
        "inline": ["all", "!fonts.googleapis.com"]
    }
}
```



## js.noMinify

不压缩 .js 文件，直接复制到输出目录。

`Boolean` `config.js.noMinify || false`

```json
{
    "js": {
        "noMinify": true
    }
}
```



## js.compress.dead_code

删除未使用的代码。

`Boolean` `config.js.compress.dead_code || true`

```json
{
    "js": {
        "compress": {
            "dead_code": false
        }
    }
}
```



## js.compress.drop_console

删除 console.* 的调用。

`Boolean` `config.js.compress.drop_console || false`

```json
{
    "js": {
        "compress": {
            "drop_console": true
        }
    }
}
```



## json.noMinify

不压缩 .json 文件，直接复制到输出目录。

`Boolean` `config.json.noMinify || false`

```json
{
    "json": {
        "noMinify": true
    }
}
```



## xml.noMinify

不压缩 .xml 文件，直接复制到输出目录。

`Boolean` `config.xml.noMinify || false`

```json
{
    "xml": {
        "noMinify": true
    }
}
```



## xml.removeComments

移除 .xml 和 .svg 中的注释。

`Boolean` `config.xml.removeComments || true`

```json
{
    "xml": {
        "removeComments": false
    }
}
```



## xml.removeWhitespaceBetweenTags

移除 .xml 和 .svg 中的空白。

`Boolean` `config.xml.removeWhitespaceBetweenTags || true`

```json
{
    "xml": {
        "removeWhitespaceBetweenTags": false
    }
}
```
