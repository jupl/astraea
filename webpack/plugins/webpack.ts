import * as hapiWebpack from 'hapi-webpack-plugin'
import {
  IPluginConfigurator,
  IPluginOptions,
  PluginConfigurator,
} from 'hapiour-decorators'
import * as webpack from 'webpack'
import config from '../../webpack.config'

/** Plugin to include assets from Webpack for development */
@PluginConfigurator(hapiWebpack)
export class WebpackPlugin implements IPluginConfigurator {
  /** Hapi Webpack plugin options */
  options: IPluginOptions

  constructor() {
    this.options = {
      compiler: webpack(config),
      assets: {
        noInfo: true,
        publicPath: config.output.publicPath,
      },
    }
  }
}
