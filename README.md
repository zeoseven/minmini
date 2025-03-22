# minmini - Build Faster, Smaller Static Web Projects

minmini is a zero-configuration minimalist source code compressor that functions similarly to traditional bundlers. It retrieves all files from a directory, filters out supported web files for individual compression, **and preserves the original directory paths in the output**.

## Get started

> Node.js 16 +

If you're just using it locally, you can use a global installation.

```sh
npm install -g minmini
```

## Output

If there is no minmini.config.json or if it is empty, minmini will start compressing all files in the `src/` directory by default and output them to the `minOutput/` directory.

```sh
minmini build
```

## License

<a href="https://github.com/zeoseven/minmini/blob/main/LICENSE">MIT</a>

## Documentation and configuration items

Documentation and configuration items can be found at <a href="https://minmini.zeoseven.com/en/">minmini.zeoseven.com</a> or <a href="https://github.com/zeoseven/minmini/blob/main/docs/src/en/docs/index.md">/docs/index.md</a> access.
