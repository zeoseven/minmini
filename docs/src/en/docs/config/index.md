# Configuration items

minmini inherits some configurations from [dependencies](../#dependencies).  



## Impact scopes

- `config.html.*` ==> .html, .htm
- `config.css.*` ==> .css, .html&lt;style&gt;, .htm&lt;style&gt;
- `config.js.*` ==> .js, .html&lt;script&gt;, .htm&lt;script&gt;
- `config.json.*` ==> .json
- `config.xml.*` ==> .xml, .svg



## outDir

Specifies the output directory for production files after compression.

`String` `config.outDir || "minOutput/"`

```json
{
    "outDir": "example-output-folder/"
}
```



## baseDir

Specifies the input directory to read files for processing.

`String` `config.baseDir || "src/"`

```json
{
    "baseDir": "example-input-folder/"
}
```



## cleanOutDir

Delete old output directory before compression.

`Boolean` `config.cleanOutDir || true`

```json
{
    "cleanOutDir": false
}
```



## ignorePaths

Directories (relative to baseDir) to ignore and directly copy to output.

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

Disable HTML minification, directly copy .html/.htm files.

`Boolean` `config.html.noMinify || undefined`

```json
{
    "html": {
        "noMinify": true
    }
}
```



## html.minifyCSS

If false, the CSS code in the style tag in the .html and .htm files and the inline styles in style="" are not compressed.

`Boolean` `config.html.minifyCSS || true`

```json
{
    "html": {
        "minifyCSS": false
    }
}
```



## html.minifyJS

If false, the JS code in the script tag in the .html and .htm files is not compressed.

`Boolean` `config.html.minifyJS || true`

```json
{
    "html": {
        "minifyJS": false
    }
}
```



## html.noMinifyInlineStyles

The style="" value is no longer compressed.

`Boolean` `config.noMinifyInlineStyles || false`

```json
{
    "noMinifyInlineStyles": true
}
```



## html.caseSensitive

If false, the HTML attribute is not case-sensitive.

`Boolean` `config.html.caseSensitive || true`

```json
{
    "html": {
        "caseSensitive": false
    }
}
```



## html.collapseBooleanAttributes

If true, the Boolean attribute in the HTML is compressed, and the value of the omitted attribute such as disabled="disabled" is compressed to disabled.

`Boolean` `config.html.collapseBooleanAttributes || true`

```json
{
    "html": {
        "collapseBooleanAttributes": false
    }
}
```


## html.collapseWhitespace

If true, compress the white space in the HTML, such as &lt;h1&gt; <span style="padding: 0 1rem;">title</span> &lt;/h1&gt; will be compressed to &lt;h1&gt;title&lt;/h1&gt;. This doesn't affect important whitespace in tags like script, style, textarea, pre, etc.

`Boolean` `config.html.collapseWhitespace || true`

```json
{
    "html": {
        "collapseWhitespace": false
    }
}
```



## html.conservativeCollapse

If true, 1 space is always left when the minified HTML encounters whitespace. It must be used with [html.collapseWhitespace](#html-collapsewhitespace). The scope of influence is the same as html.collapseWhitespace.

`Boolean` `config.html.conservativeCollapse || false`

```json
{
    "html": {
        "conservativeCollapse": true
    }
}
```



## html.decodeEntities

Decode HTML entities into Unicode characters whenever possible.

`Boolean` `config.html.decodeEntities || false`

```json
{
    "html": {
        "decodeEntities": true
    }
}
```



## html.html5

Parsed using the HTML5 specification.

`Boolean` `config.html.html5 || true`

```json
{
    "html": {
        "html5": false
    }
}
```



## html.removeComments

Remove comments from HTML.

`Boolean` `config.html.removeComments || true`

```json
{
    "html": {
        "removeComments": false
    }
}
```



## html.removeEmptyAttributes

Remove empty attributes in HTML that are safe to remove, but do not remove required attributes such as img[src=""], and so on.

`Boolean` `config.html.removeEmptyAttributes || true`

```json
{
    "html": {
        "removeEmptyAttributes": false
    }
}
```



## html.removeScriptTypeAttributes

&lt;script type="text/javascript"&gt; will be compressed into &lt;script&gt; with the other type property values unchanged.

`Boolean` `config.html.removeScriptTypeAttributes || false`

```json
{
    "html": {
        "removeScriptTypeAttributes": true
    }
}
```



## html.removeStyleLinkTypeAttributes

Remove the type="text/css" attribute of link and style, and leave the other type property values unchanged.

`Boolean` `config.html.removeStyleLinkTypeAttributes || false`

```json
{
    "html": {
        "removeStyleLinkTypeAttributes": true
    }
}
```



## html.keepClosingSlash

Keeping slashes in HTML such as &lt;br /&gt; will not be compressed to &lt;br&gt; but &lt;br /&gt;.

`Boolean` `config.html.keepClosingSlash || true`

```json
{
    "html": {
        "keepClosingSlash": false
    }
}
```



## css.noMinify

The .css file is not compressed, and is copied directly to the output directory.

`Boolean` `config.css.noMinify || false`

```json
{
    "css": {
        "noMinify": true
    }
}
```



## css.sourceMap

Generate a .css.map file in the output directory.

`Boolean` `config.css.sourceMap || false`

```json
{
    "css": {
        "sourceMap": true
    }
}
```



## css.sourceMapInlineSources

Put the CSS content into a .map file.

`Boolean` `config.css.sourceMapInlineSources || true`

```json
{
    "css": {
        "sourceMapInlineSources": false
    }
}
```



## css.compatibility

The compatibility setting for the compressed CSS and style tags does not affect the compression algorithm for style="" inline styles.

`String` `config.css.compatibility || "*"`

| Value | Description |
| ----  | ----------- |
|   *   | IE10+ compatible |
|   ie9 | IE9+ compatible |
|   ie8 | IE8+ compatible |
|   ie7 | IE7+ compatible |

```json
{
    "css": {
        "compatibility": "ie9"
    }
}
```



## css.level

The level of optimization for compressing CSS and style tags does not affect the compression algorithm for style="" inline styles.

`Number` `config.css.level || 1`

| Value | Description |
| :---: | ----------- |
|   0   | No optimization, which is generally considered safe, retains comments |
|   1   | Use safer optimizations and don't keep comments |
|   2   | Rules may be deleted, moved, reorganized, and problems may occur, and comments are not retained |

```json
{
    "css": {
        "level": 2
    }
}
```



## css.format

The output format of CSS and style tags.

`String` `config.css.format || false`

|    Value    | Description |
| :---------: | ----------- |
| keep-breaks | Keep line breaks |
|   beautify  | Beautify the output and maintain readability |

```json
{
    "css": {
        "format": "keep-breaks"
    }
}
```



## css.inline

Inline the contents of CSS files ingested by @import and the like directly into the current CSS file or style tags.

`Array | Boolean` `config.css.inline || false`

| Value | Description |
| :---: | ----------- |
| ["all"] | Inline all ingested CSS files |
| ["local"] | Inline locally ingested CSS files |
| ["remote"] | Inline remotely ingested CSS files |
| ["!&lt;String&gt;"] | CSS files that don't inline specific sources |
| ["&lt;String&gt;"] | Inline CSS files for specific sources |
| &lt;Boolean&gt; false | Leave the @import statement |


```json
{
    "css": {
        "inline": ["all", "!fonts.googleapis.com"]
    }
}
```



## js.noMinify

The .js file is not compressed, and is copied directly to the output directory.

`Boolean` `config.js.noMinify || false`

```json
{
    "js": {
        "noMinify": true
    }
}
```



## js.noSpaces

> [!WARNING]
> Relatively aggressive，This can cause your code to not run.

Remove two or more consecutive spaces, Applies to possible extra spaces in the compressed template string.

`Boolean` `config.js.noSpaces || false`

```json
{
    "js": {
        "noSpaces": true
    }
}
```



## js.compress.dead_code

Delete unused code.

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

Delete the call to console.*.

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

The .json file is not compressed, copied directly to the output directory.

`Boolean` `config.json.noMinify || false`

```json
{
    "json": {
        "noMinify": true
    }
}
```



## xml.noMinify

The .xml file is not compressed, and is copied directly to the output directory.

`Boolean` `config.xml.noMinify || false`

```json
{
    "xml": {
        "noMinify": true
    }
}
```



## xml.removeComments

Remove annotations from .xml and .svg.

`Boolean` `config.xml.removeComments || true`

```json
{
    "xml": {
        "removeComments": false
    }
}
```



## xml.removeWhitespaceBetweenTags

Remove blank space in .xml and .svg.

`Boolean` `config.xml.removeWhitespaceBetweenTags || true`

```json
{
    "xml": {
        "removeWhitespaceBetweenTags": false
    }
}
```
