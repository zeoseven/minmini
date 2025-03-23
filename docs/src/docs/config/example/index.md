# 示例配置

根据框架的默认构建目录进行配置。

> [!WARNING]
> 不建议在已有最小化功能的框架下使用 minmini ，因为这可能导致水合（Hydration）错误。



## 压缩构建时忽略的目录

public/ 文件夹通常被用作静态文件目录，它们不会被构建，假设 public/more/ 用于存放独立于页面的静态文件，输出目录为 out/ 并希望只压缩 /more/ 中的文件。

在构建完成后，以这样的配置运行 minmini 。

```json
{
    "baseDir": "out/more/",
    "outDir": "out/more/"
}
```

无需改变可能的文件引入， minmini 会保持原有目录结构。

甚至说，在构建完成之后，直接压缩 public/ 中的所有文件后替换构建目录，但需要注意设置 cleanOutDir 为 false。

```json
{
    "baseDir": "public/",
    "outDir": "out/",
    "cleanOutDir": false
}
```

