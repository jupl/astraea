const {find} = require('globule')
const {basename, extname} = require('path')
const {CommonsChunkPlugin} = require('webpack').optimize
const {resolve} = require('./util')

/**
 * Build base Webpack configuration with defaults that can be expanded upon
 * @param {Object} options - Options
 * @param {string} options.source - Source path to read source code from
 * @param {string} options.destination - Destination path to write assets out
 * @return {Object} Webpack configuration
 */
module.exports = ({source, destination}) => {
  const config = {
    entry: entries(source),
    output: {
      path: resolve(destination),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      loaders: [
        {test: /\.tsx?$/, loader: 'awesome-typescript'},
        {test: /\.json$/, loader: 'json'},
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.(gif|jpg|jpeg|png|svg)$/, loader: 'file'},
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    plugins: [],
  }

  // If there are more than one generated JS files, create a file that contains
  // shared code among all generated JS files called common.js
  if(Object.keys(config.entry).length > 1) {
    config.plugins = [
      ...config.plugins,
      new CommonsChunkPlugin({name: 'common'}),
    ]
  }

  return config
}

/**
 * Build entries configuration for Webpack based on our app structure by
 * looking for all top-level JS files in source to compile
 * @param {string} source - Source directory
 * @return {Object} Entries configuration for Webpack
 */
function entries(source) {
  const files = find(resolve(source, '*.{js,ts,tsx}'))
  return files.reduce((obj, file) => Object.assign(obj, {
    [basename(file, extname(file))]: [file],
  }), {})
}
