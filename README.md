# minmini - Build Faster, Smaller Static Web Projects

minmini is a lightweight, zero-configuration usable source code minimization compressor that works and behaves like a traditional packager, minmini takes all the files in a directory and filters out the supported web files and compresses them one by one, **while maintaining the original path in the output directory**.

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

Documentation and configuration items can be found at <a href="https://minmini.zeoseven.com">minmini.zeoseven.com</a> or <a href="https://github.com/zeoseven/minmini/blob/main/docs/src/en/docs/index.md">/docs/index.md</a> access.
