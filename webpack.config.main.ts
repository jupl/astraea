import {addRules, addToEntries, createConfiguration} from 'wcb'

const isStorybook = process.env.STORYBOOK === 'true'

/** Generated webpack configuration */
export const configuration = addToEntries(addRules(createConfiguration({
  assets: !isStorybook,
  atlOptions: {useBabel: true},
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  html: !isStorybook,
  paths: true,
  source: 'src/assets',
  split: true,
  webpack: {
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  },
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
]), [
  'normalize.css',
])
