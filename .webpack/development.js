const {sep} = require('path')

// When rewriting source map file paths, prepend a slash for Windows
const protocol = process.platform === 'win32' ? 'file:///' : 'file://'

/**
 * Add development build settings to Webpack configuration. This includes
 * setting up source map options.
 * @param {Object} config - Configuration to modify
 * @return {void}
 */
module.exports = config => {
  config.devtool = 'inline-source-map'
  config.output.devtoolModuleFilenameTemplate = filenameTemplate
}

// Build a new resource path for source maps with respect to the OS

/**
 * For a file, build a new resource path for source maps with respect to the OS
 * @param {Object} info - File info
 * @param {String} info.absoluteResourcePath - Resource path in file system
 * @return {string} Resource path for source map
 */
function filenameTemplate({absoluteResourcePath}) {
  return `${protocol}${absoluteResourcePath.split(sep).join('/')}`
}
