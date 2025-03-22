# 关于 minmini

minmini 是一个零配置可用的源码最小化压缩器，使用方式和行为类似于传统打包器，minmini 获取一个目录中的所有文件，并筛选出支持的 Web 文件后逐个压缩，**同时在输出目录保持原有的路径**。

> [!WARNING]
> 虽然依赖的压缩算法通常已经非常成熟，但 minmini 目前仍处于 beta 版本。

> *minmini 或许也可以称为是多个压缩器的聚合，minmini 只不过是实现了类似于打包器的压缩器。因为我们喜欢在生产环境中使用压缩的代码，但脱离具有自动缩小的框架时，静态资源在逐个压缩时是非常困难的。*

## 使用场景

其实， minmini 的使用场景并不多，主要是为了将一个目录下的文件压缩成适合发布的版本，比如：

- 在另一个远程服务器或 CDN 上的通用静态资源
- 独立于应用程序的传统 HTML 页面
- 在发布前单独或额外的进行一次压缩

## 依赖

相对于最新版本的 minmini：

- [chalk](https://github.com/chalk/chalk)
- [clean-css](https://github.com/clean-css/clean-css)
- [commander](https://github.com/tj/commander.js)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)
- [glob](https://github.com/isaacs/node-glob)
- [html-minifier-terser](https://github.com/terser/html-minifier-terser)
- [minify-xml](https://github.com/kristian/minify-xml)
- [terser](https://github.com/terser/terser)