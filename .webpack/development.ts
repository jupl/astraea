import {Configuration} from 'webpack'

/**
 * Add development build settings to Webpack configuration. This includes
 * setting up source map options.
 * @param config Configuration to modify
 * @return Updated configuration
 */
export default function addDevelopment(config: Configuration): Configuration {
  return {
    ...config,
    devtool: 'inline-source-map',
  }
}
