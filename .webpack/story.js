/**
 * Add Webpack 1 specific settings for Storybook
 * @param {Object} config Configuration to modify
 * @return {void}
 */
module.exports = config => {
  config.resolve.extensions = ['', ...config.resolve.extensions]
}
