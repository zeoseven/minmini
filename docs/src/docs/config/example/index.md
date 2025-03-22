# 示例配置

根据框架的默认构建目录进行配置。



## Next.js

```json
{
    "baseDir": "out/",
    "outDir": "minOutput/"
}
```

如果不想使用多余的目录，可以将它们配置为相同， minmini 会自动处理它们。

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