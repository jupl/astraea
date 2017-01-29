import {Configuration, NewModule, NewUseRule, OldUseRule} from 'webpack'

/**
 * Add Webpack 1 specific for Storybook
 * @param config Configuration to modify
 * @return Updated configuration
 */
export default function addStory({
  module,
  resolve: {extensions = [], ...resolve} = {},
  ...config,
}: Configuration): Configuration {
  const {rules, ...newModule} = module as NewModule
  const loaders = rules.map(({test, use}: NewUseRule) => ({
    test,
    loaders: use,
  } as OldUseRule))
  return {
    ...config,
    module: {
      ...newModule,
      loaders,
    },
    resolve: {
      ...resolve,
      extensions: ['', ...extensions],
    },
  }
}
