# 保留代码片段



## HTML

> .html / .htm

如果要在压缩时忽略一些代码片段，则可以使用 htmlmin:ignore 包裹。

::: code-group

```html [压缩前]
<p>
    Hello
</p>

<!-- htmlmin:ignore -->
<!-- Hello World -->
<p>
    World
</p>
<!-- htmlmin:ignore -->
```

```html [压缩后]
<p>Hello</p>
<!-- Hello World -->
<p>
    World
</p>
```

:::



## CSS

> .css / .html &lt;style&gt; / .htm &lt;style&gt;

使用 `/*! */` 包裹需要保留的片段，当 config.css.level = 0 时可以直接使用 `/* */`。

::: code-group

```css [压缩前]
/*!
    Hello World
 */

/*
    DEL
 */

p {
    margin: 0;
}
```

```css [压缩后]
/*!
    Hello World
 */p{margin:0}
```

:::



## JavaScript

> .js / .html &lt;script&gt; / .htm &lt;script&gt;

当注释包含 @license 等声明或者以 /*! */ 格式呈现，那么整个注释将不会被删除。

::: code-group

```js [压缩前]
/*
 * @license
 */

/*
 * license
 */

/*!
 * license
 */

var a = 1;
```

```js [压缩后]
/*
 * @license
 */
/*!
 * license
 */var a=1;
```

:::