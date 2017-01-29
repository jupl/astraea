import {
  Configuration,
  Entry,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
} from 'webpack'

// Entry property in webpack config
type EntryProp = Configuration['entry']

// Modules requires for hot reloading in development
const hotModules = [
  'react-hot-loader/patch',
  'eventsource-polyfill',
  'webpack-hot-middleware/client',
]

/**
 * Add HMR settings to Webpack configuration
 * @param config Configuration to modify
 * @return Updated configuration
 */
export default function addHot({
  entry,
  plugins = [],
  ...config,
}: Configuration): Configuration {
  return {
    ...config,
    entry: addHotModules(entry),
    plugins: [
      ...plugins,
      new HotModuleReplacementPlugin(),
      new NoEmitOnErrorsPlugin(),
    ],
  }
}

/**
 * Add hot modules to each entry
 * @param entry Entry information
 * @return Updated entries
 */
function addHotModules(entry: EntryProp): EntryProp {
  // Check if it is an entry object
  if(!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    return entry
  }

  // Add hot modules to each entry
  return Object.keys(entry)
    .filter(key => Array.isArray(entry[key]))
    .reduce((previous, key) => ({
      ...previous,
      [key]: [...hotModules, ...entry[key]],
    }), {} as Entry)
}
