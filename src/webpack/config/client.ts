import {addRules, createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration */
export const configuration = addRules(createConfiguration({
  assets: process.env.STORYBOOK !== 'true' ? 'src/assets' : undefined,
  common: true,
  cssLoaders,
  destination: 'dist/assets',
  log: message => console.log(message),
  source: 'src/assets',
  useBabel: true,
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
