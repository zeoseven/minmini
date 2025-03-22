export const initConfig = (config) => {

  !config && (config = {});

  !config.html && (config.html = {});

  !config.css && (config.css = {});

  !config.js && (config.js = {});
  !config.js.compress && (config.js.compress = {});

  !config.json && (config.json = {});

  !config.xml && (config.xml = {});

  !config.svg && (config.svg = {});

  return config;
};


