const {
  DefinePlugin,
  LoaderOptionsPlugin,
  optimize: {UglifyJsPlugin},
} = require('webpack')

/**
 * Add production build settings to Webpack configuration
 * @param {Object} config - Configuration to modify
 * @return {void}
 */
module.exports = config => {
  config.plugins = [
    ...config.plugins,
    new LoaderOptionsPlugin({minimize: true, debug: false}),
    new UglifyJsPlugin({
      compress: {drop_console: true, drop_debugger: true},
      output: {comments: false},
    }),
    new DefinePlugin({'process.env.NODE_ENV': '"production"'}),
  ]
}
