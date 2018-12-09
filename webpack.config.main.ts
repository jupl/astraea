import {addRules, addToEntries, createConfiguration} from 'wcb'

/** Generated webpack configuration */
export const configuration = addToEntries(addRules(createConfiguration({
  atlOptions: {useBabel: true},
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'src/main/resources/public',
  devServer: true,
  html: true,
  paths: true,
  source: 'src/client/assets',
  split: true,
  webpack: {
    devServer: {
      proxy: {
        '/**': 'http://localhost:8080',
      },
    },
  },
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
]), [
  'normalize.css',
])
