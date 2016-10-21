const {find} = require('globule')
const {basename, extname} = require('path')
const {CommonsChunkPlugin} = require('webpack').optimize
const {resolve} = require('./util')

/**
 * Build base Webpack configuration with defaults that can be expanded upon
 * @return {Object} Webpack configuration
 */
module.exports = () => {
  const config = {
    entry: entries(),
    output: {
      path: resolve('dist'),
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
 * looking for all top-level JS files in src to compile
 * @return {Object} Entries configuration for Webpack
 */
function entries() {
  return find(resolve('src/*.{js,ts,tsx}'))
    .reduce((obj, file) => Object.assign(obj, {
      [basename(file, extname(file))]: [file],
    }), {})
}
