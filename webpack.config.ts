import {addRules, addToEntries, createConfiguration} from 'wcb'

const isStorybook = process.env.STORYBOOK === 'true'

// tslint:disable-next-line:no-default-export
export default addToEntries(addRules(createConfiguration({
  assets: !isStorybook,
  atlOptions: {
    useBabel: true,
  },
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  html: !isStorybook,
  source: 'src/assets',
  split: true,
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
]), [
  'normalize.css',
])
