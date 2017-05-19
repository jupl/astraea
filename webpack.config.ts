import {addRules, addToEntries, createConfiguration} from 'wcb'
import {optimize} from 'webpack'

// Build configuration
let configuration = addToEntries(addRules(createConfiguration({
  assets: process.env.STORYBOOK !== 'true' ? 'assets' : undefined,
  destination: 'static',
  log: message => console.log(message),
  source: 'assets',
  useBabel: true,
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
]), ['react-hot-loader/patch'])
if(Object.keys(configuration.entry).length > 1) {
  configuration = {
    ...configuration,
    plugins: [
      ...configuration.plugins,
      new optimize.CommonsChunkPlugin({name: 'common'}),
    ],
  }
}

// tslint:disable-next-line:no-default-export
export default configuration
