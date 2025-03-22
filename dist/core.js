import { minify as htmlMinify } from 'html-minifier-terser';
import { minify as terser } from "terser";
import xmlMinify from 'minify-xml';
import CleanCSS from 'clean-css';

import fse from 'fs-extra';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import chalk from 'chalk';



async function core(config) {

  const vars = {
    startTime: Date.now(),
    outputNumber: 0
  };

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log(` `);
  console.log(
    chalk.bgBlue.white(`        minmini ${JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')).version}        `)
  );
  console.log(` `);

  function value(a, b) {
    return typeof a === 'undefined' || a == null ? b : a;
  };

  function funValue(a, b) {
    return a || typeof a === 'undefined' || a == null ? b : a;
  };



  const _outDir = config.outDir && config.outDir.replace("\\/g", "").replace("./", "");
  const outDir = config.outDir ?
    config.outDir.endsWith("/") ? _outDir : _outDir + "/" :
    'minOutput/';

  const baseDir = config.baseDir ?
    config.baseDir.endsWith("/") ? config.baseDir : config.baseDir + "/" :
    'src/';



  // All Files
  const files = globSync('**/*', {
    cwd: baseDir,
    nodir: true,
    ignore: config.ignorePaths
      ? config.ignorePaths.map(i => `${i}/**`)
      : undefined
  });

  if (files <= 0) {
    console.log(chalk.bgRed.white(`  There are no files in ${baseDir} or no directory for this.  `));
    console.log(` `);
    process.exit(0);
  } else {
    console.log(`    ${files.length} files found ...`);
    console.log(`    outDir == ${outDir}`);
    config.css.noMinify && console.log(`    css.noMinify == true.`);
    config.html.noMinify && console.log(`    html.noMinify == true.`);
    config.js.noMinify && console.log(`    js.noMinify == true.`);
    console.log(` `);
  };



  // Remove
  if (
    value(config.cleanOutDir, true)
  ) {
    try {
      fse.removeSync(outDir);
    } catch (e) { };
  };



  // Copy
  fse.copySync(baseDir, outDir);



  const output = (path, content) => {
    if (path && content) {
      vars.outputNumber++;
      fs.writeFileSync(path, content);
    };
    process.stdout.write(`    ${vars.outputNumber} / ${files.length}   \r`);
  }; output();



  for (const file of files) {



    // CSS
    if (value(config.css.noMinify, true)) {
      if (file.endsWith('.css')) {
        const content = fs.readFileSync(baseDir + file, 'utf8');

        let result = null;
        try {
          result = new CleanCSS({
            level: value(config.css.level, 1),
            compatibility: value(config.css.compatibility, "*"),
            format: value(config.css.format, false),
            inline: value(config.css.inline, false),
            sourceMap: value(config.css.sourceMap, false),
            sourceMapInlineSources: value(config.css.sourceMapInlineSources, true)
          }).minify(content);
        } catch (e) {
          result = content;
        };

        result.sourceMap && fs.writeFileSync(outDir + file + ".map", JSON.stringify(result.sourceMap));
        output(outDir + file, result.styles);
      };
    };



    // HTML
    if (value(config.html.noMinify, true)) {
      if (file.endsWith('.html') || file.endsWith('.htm')) {
        const result = await htmlMinify(fs.readFileSync(baseDir + file, 'utf8'), {
          minifyJS: funValue(config.html.minifyJS, async (js) => {
            try {
              const originJS = js;
              const result = await terser(originJS, {});
              return result.code.trim() != "" ? result.code : originJS;
            } catch {
              return js;
            };
          }),
          minifyCSS: funValue(config.html.minifyCSS, (css) => {
            try {
              const originCSS = css;
              const result = new CleanCSS({
                level: value(config.css.level, 1),
                compatibility: value(config.css.compatibility, "*"),
                format: value(config.css.format, false),
                inline: value(config.css.inline, false)
              }).minify(originCSS);
              if (config.html.noMinifyInlineStyles) {
                return result.styles.trim() != "" ? result.styles : originCSS;
              } else {
                return result.styles.trim() != "" ? result.styles : originCSS.replace(/\s*:\s*/g, ':').replace(/\s*;\s*/g, ';').trim();
              };
            } catch {
              return css;
            };
          }),
          caseSensitive: value(config.html.caseSensitive, true),
          collapseBooleanAttributes: value(config.html.collapseBooleanAttributes, true),
          collapseWhitespace: value(config.html.collapseWhitespace, true),
          conservativeCollapse: value(config.html.conservativeCollapse, false),
          decodeEntities: value(config.html.decodeEntities, false),
          html5: value(config.html.html5, true),
          removeComments: value(config.html.removeComments, true),
          removeEmptyAttributes: value(config.html.removeEmptyAttributes, true),
          removeScriptTypeAttributes: value(config.html.removeScriptTypeAttributes, false),
          removeStyleLinkTypeAttributes: value(config.html.removeStyleLinkTypeAttributes, false),
          keepClosingSlash: value(config.html.keepClosingSlash, true)
        });

        output(outDir + file, result);
      };
    };



    // JS
    if (value(config.js.noMinify, true)) {
      if (file.endsWith('.js')) {
        const jsCode = fs.readFileSync(baseDir + file, 'utf8');

        let result = null;
        try {
          result = await terser(jsCode, {
            compress: {
              dead_code: value(config.js.compress.dead_code, true),
              drop_console: value(config.js.compress.drop_console, false)
            }
          });
        } catch (e) {
          result = jsCode
        };

        output(outDir + file, result.code);
      };
    };



    // JSON
    if (value(config.json.noMinify, true)) {
      if (file.endsWith('.json')) {
        const jsonCode = fs.readFileSync(baseDir + file, 'utf8');

        let result = null;
        try {
          result = JSON.stringify(JSON.parse(jsonCode))
        } catch (e) {
          result = jsonCode;
        };

        output(outDir + file, result);
      };
    };



    // XML
    if (value(config.xml.noMinify, true)) {
      if (file.endsWith('.xml')) {
        const xmlCode = fs.readFileSync(baseDir + file, 'utf8');

        let result = null;
        try {
          result = xmlMinify(xmlCode, {
            removeComments: value(config.xml.removeComments, true),
            removeWhitespaceBetweenTags: value(config.xml.removeWhitespaceBetweenTags, true)
          });
        } catch (e) {
          result = xmlCode;
        };

        output(outDir + file, result);
      };
    };



    // SVG
    if (value(config.xml.noMinify, true)) {
      if (file.endsWith('.svg')) {
        const svgCode = fs.readFileSync(baseDir + file, 'utf8');

        let result = null;
        try {
          result = xmlMinify(svgCode, {
            removeComments: value(config.xml.removeComments, true),
            removeWhitespaceBetweenTags: value(config.xml.removeWhitespaceBetweenTags, true)
          });
        } catch (e) {
          result = svgCode;
        };

        output(outDir + file, result);
      };
    };



  };



  console.log(
    chalk.bgGreen.black(`  ${vars.outputNumber} Files Have Been Minified. (${((Date.now() - vars.startTime) / 1000).toFixed(3)}s)  `)
  );
  console.log(` `);
};

export default core;