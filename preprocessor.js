const {process} = require('babel-jest')
const makeCacheKeyFn = require('fbjs-scripts/jest/createCacheKeyFunction')
const {extname, join} = require('path')
const {transpile} = require('typescript')
const {compilerOptions} = require('./tsconfig')

// Take base options and use ES5 for Jest
const options = Object.assign({}, compilerOptions, {module: 'commonjs'})

// Transpile TypeScript files
exports.process = (src, path) => {
  switch(extname(path)) {
  case '.ts':
  case '.tsx':
    return transpile(src, options, path)
  default:
    return src
  }
}

// Mark this file and tsconfig.json as potential cache busters
exports.getCacheKey = makeCacheKeyFn([
  __filename,
  join(__dirname, 'tsconfig.json'),
])
