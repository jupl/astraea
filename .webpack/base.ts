import {find} from 'globule'
import {basename, extname} from 'path'
import {Configuration, Entry, optimize} from 'webpack'
import {resolve} from './util'

/**
 * Build base Webpack configuration with defaults that can be expanded upon
 * @property source Source path to read source code from
 * @property destination Destination path to write assets out
 * @property useCache If true then use cache for TypeScript loader
 * @return Webpack configuration
 */
export default function createBase(
  source: string,
  destination: string,
  useCache: boolean,
): Configuration {
  let config: Configuration = {
    entry: entries(source),
    output: {
      path: resolve(destination),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          query: {useCache},
        },
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.(gif|jpg|jpeg|png|svg)$/, loader: 'file-loader'},
      ],
    },
    resolve: {
      extensions: [
        '.js',
        '.json',
        '.ts',
        '.tsx',
      ],
    },
  }

  // If there are more than one generated JS files, create a file that contains
  // shared code among all generated JS files called common.js
  if(Object.keys(config.entry).length > 1) {
    config = {
      ...config,
      plugins: [
        ...config.plugins || [],
        new optimize.CommonsChunkPlugin({name: 'common'}),
      ],
    }
  }

  return config
}

/**
 * Build entries configuration for Webpack based on our app structure by
 * looking for all top-level JS files in source to compile
 * @param source Source directory
 * @return Entries configuration for Webpack
 */
function entries(source: string) {
  const files = find(resolve(source, '*.{js,ts,tsx}'))
  return files
    .map(file => ({file, base: basename(file, extname(file))}))
    .reduce((obj, {base, file}) => ({...obj, [base]: [file]}), {} as Entry)
}
