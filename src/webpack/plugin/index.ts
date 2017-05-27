import * as hapiWebpackPlugin from 'hapi-webpack-plugin'
import * as webpack from 'webpack'
import {configuration} from '../config/client'

/** Plugin to register */
export const register = hapiWebpackPlugin

/** Options for plugin */
export const options = {
  compiler: webpack(configuration),
  assets: {
    noInfo: true,
    publicPath: configuration.output.publicPath,
  },
}
