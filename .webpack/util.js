const path = require('path')

/**
 * Same as path.resolve in Node, but with assurance of where is the starting
 * directory relative to our project
 * @return {string} Absolute path
 */
exports.resolve = function resolveInProject(...args) {
  return path.resolve(__dirname, '..', ...args)
}
