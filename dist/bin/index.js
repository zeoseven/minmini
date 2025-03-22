#! /usr/bin/env node
import fs from 'fs';
import { Command } from 'commander';
import chalk from 'chalk';
import core from '../core.js';
import { initConfig } from '../more.js';

const program = new Command();
program.command('build').action(async () => {
  try {
    let config = null;

    try {
      config = JSON.parse(fs.readFileSync('minmini.config.json', 'utf8'));
    } catch (e) {
      config = null;
    };

    config = initConfig(config);

    await core(config);
  } catch (e) {
    console.log(chalk.red(`    Error: ${e.message}`));
    console.log(` `);
    process.exit(1);
  };
});
program.parse(process.argv);