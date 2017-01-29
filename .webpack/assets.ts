import {F_OK} from 'constants'
import * as CopyPlugin from 'copy-webpack-plugin'
import {accessSync} from 'fs'
import {Configuration} from 'webpack'
import {resolve} from './util'

/**
 * Add static assets to Webpack configuration
 * @param config Configuration to modify
 * @param assets Assets path to read static assets from
 * @return Updated configuration
 */
export default function addAssets(
  {plugins = [], ...config}: Configuration,
  assets: string,
): Configuration {
  // If there is an assets folder, tell Webpack to copy contents as part of
  // build
  try {
    const from = resolve(assets)
    accessSync(from, F_OK)
    return {
      ...config,
      plugins: [...plugins, new CopyPlugin([{from}])],
    }
  }
  catch(e) {
    // Skip copy from assets
    return config
  }
}
