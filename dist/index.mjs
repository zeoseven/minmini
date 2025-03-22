import core from './core.js';
import { initConfig } from './more.js';

const minmini = async (config) => {
  await core(
    initConfig(config)
  );
};

export default minmini;