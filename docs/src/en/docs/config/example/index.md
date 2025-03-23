# Example configuration

Configured according to the framework's default build directory.

> [!WARNING]
> It is not recommended to use minmini in the framework of an existing minimization function, as this may lead to hydration errors.



## Compress directories that are ignored when building

The public/ folder is often used as a static file directory, they are not built, assuming public/more/ is used to hold static files independent of the page, and the output directory is out/ and you want to compress only the files in /more/.

After the build is complete, run minmini in this configuration.

```json
{
    "baseDir": "out/more/",
    "outDir": "out/more/"
}
```

There is no need to change the possible file import, minmini will maintain the original directory structure.

It is even said that after the build is completed, all the files in public/ in development are directly compressed and output to the build directory, but you need to pay attention to setting cleanOutDir to false.

```json
{
    "baseDir": "public/",
    "outDir": "out/",
    "cleanOutDir": false
}
```