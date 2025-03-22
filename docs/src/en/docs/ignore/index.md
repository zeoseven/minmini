# Keep the code snippet



## HTML

> .html / .htm

If you want to ignore some code snippets when compressing, you can wrap them with htmlmin:ignore.

::: code-group

```html [Before]
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

```html [After]
<p>Hello</p>
<!-- Hello World -->
<p>
    World
</p>
```

:::



## CSS

> .css / .html &lt;style&gt; / .htm &lt;style&gt;

Use `/*! */` Wrap the fragment that needs to be kept, and use `/* */` directly when config.css.level = 0.

::: code-group

```css [Before]
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

```css [After]
/*!
    Hello World
 */p{margin:0}
```

:::



## JavaScript

> .js / .html &lt;script&gt; / .htm &lt;script&gt;

When a comment contains a declaration such as @license or ends with /*! */ format, then the entire comment will not be deleted.

::: code-group

```js [Before]
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

```js [After]
/*
 * @license
 */
/*!
 * license
 */var a=1;
```

:::