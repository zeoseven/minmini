# About minmini

minmini is a zero-configuration minimalist source code compressor that functions similarly to traditional bundlers. It retrieves all files from a directory, filters out supported web files for individual compression, **and preserves the original directory paths in the output**.

> [!WARNING]
> While the dependent compression algorithms are generally very mature, minmini is still in beta at the moment.

> *minmini can perhaps also be referred to as an aggregation of multiple compressors, with minmini simply implementing a compressor similar to a packer. Because we like to use compressed code in production, but it's very difficult to compress static resources one by one when moving away from frameworks with auto-minification.*

## Usage scenarios

In fact, there are not many use cases for minmini, mainly to compress files in a directory into a suitable version for distribution, such as:

- A generic static resource on another remote server or CDN
- A traditional HTML page that is independent of the application
- Compress separately or additionally before publishing

## Dependencies

Relative to the latest version of minmini:

- [chalk](https://github.com/chalk/chalk)
- [clean-css](https://github.com/clean-css/clean-css)
- [commander](https://github.com/tj/commander.js)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)
- [glob](https://github.com/isaacs/node-glob)
- [html-minifier-terser](https://github.com/terser/html-minifier-terser)
- [minify-xml](https://github.com/kristian/minify-xml)
- [terser](https://github.com/terser/terser)