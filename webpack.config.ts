import {addRules, createConfiguration} from 'wcb'

// tslint:disable-next-line:no-default-export
export default addRules(createConfiguration({
  assets: process.env.STORYBOOK !== 'true',
  atlOptions: {
    useBabel: true,
  },
  common: true,
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  source: 'src/assets',
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
