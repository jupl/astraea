import {
  Configuration,
  DefinePlugin,
  LoaderOptionsPlugin,
  optimize,
} from 'webpack'

/**
 * Add production build settings to Webpack configuration
 * @param config Configuration to modify
 * @return Updated configuration
 */
export default function addProduction({
  plugins = [],
  ...config,
}: Configuration): Configuration {
  return {
    ...config,
    plugins: [
      ...plugins,
      new LoaderOptionsPlugin({minimize: true, debug: false}),
      new optimize.UglifyJsPlugin({
        comments: false,
        compress: {
          drop_console: true,
          drop_debugger: true,
          warnings: false,
        },
      }),
      new DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    ],
  }
}
