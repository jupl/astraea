// tslint:disable-next-line:no-implicit-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {Configuration} from 'webpack'
import configuration from '../webpack.config'

interface Options {
  config: Configuration
}

const plugins = configuration.plugins.filter(x => (
  process.env.HOT_MODULES === 'true' && x instanceof MiniCssExtractPlugin
))

// tslint:disable-next-line:no-default-export
export default ({config}: Options) => ({
  ...config,
  module: {
    ...config.module,
    rules: configuration.module.rules,
  },
  plugins: [...config.plugins!, ...plugins],
  resolve: {
    ...config.resolve,
    alias: configuration.resolve.alias,
    extensions: configuration.resolve.extensions,
    plugins: configuration.resolve.plugins,
  },
})
