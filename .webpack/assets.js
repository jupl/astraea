const CopyPlugin = require('copy-webpack-plugin')
const {accessSync, F_OK} = require('fs')
const {resolve} = require('./util')

/**
 * Add static assets to Webpack configuration
 * @param {Object} config - Configuration to modify
 * @param {Object} options - Options
 * @param {string} options.assets - Assets path to read static assets from
 * @return {void}
 */
module.exports = (config, {assets}) => {
  // If there is an assets folder, tell Webpack to copy contents as part of
  // build
  try {
    const from = resolve(assets)
    accessSync(from, F_OK)
    config.plugins = [...config.plugins, new CopyPlugin([{from}])]
  }
  catch(e) {
    // Skip copy from assets
  }
}
