# Example configuration

Configured according to the framework's default build directory.



## Next.js

```json
{
    "baseDir": "out/",
    "outDir": "minOutput/"
}
```

If you don't want to use redundant directories, you can configure them to be the same, and minmini will handle them automatically.

```json
{
    "baseDir": "out/",
    "outDir": "out/"
}
```



## VitePress

```json
{
    "baseDir": ".vitepress/dist/",
    "outDir": ".vitepress/dist/"
}
```