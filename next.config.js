// next.config.js
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(
  withCSS({
    webpack(config, options) {
      // Further custom configuration here

      config.node = {
        fs: 'empty',
      };
  
      return config;
    }
  })
);
