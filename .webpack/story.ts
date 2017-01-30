import {Configuration} from 'webpack'

/**
 * Add Webpack 1 specific for Storybook
 * @param config Configuration to modify
 * @return Updated configuration
 */
export default function addStory({
  resolve: {extensions = [], ...resolve} = {},
  ...config,
}: Configuration): Configuration {
  return {
    ...config,
    resolve: {
      ...resolve,
      extensions: ['', ...extensions],
    },
  }
}
