import * as webpack from 'webpack'
import {configuration} from '../config/client'

// Plugin
export {plugin} from 'hapi-webpack-plugin'

/** Options for plugin */
export const options = {
  compiler: webpack(configuration),
  assets: {
    logLevel: 'warn',
    publicPath: configuration.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
}
