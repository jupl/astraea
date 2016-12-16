var makeCacheKeyFn = require('fbjs-scripts/jest/createCacheKeyFunction')
var {join} = require('path')
var {transpile} = require('typescript')
var {compilerOptions} = require('./tsconfig')

// Take base options and use ES5 for Jest
const options = Object.assign({}, compilerOptions, {module: 'commonjs'})

// Transpile TypeScript files
exports.process = (src, path) => transpile(src, options, path)

// Mark this file and tsconfig.json as potential cache busters
exports.getCacheKey = makeCacheKeyFn([
  __filename,
  join(__dirname, 'tsconfig.json'),
])
