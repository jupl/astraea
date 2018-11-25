import {addRules, createConfiguration} from 'wcb'

const isStorybook = process.env.STORYBOOK === 'true'

let configuration = addRules(createConfiguration({
  assets: !isStorybook,
  atlOptions: {
    useBabel: true,
  },
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  html: !isStorybook,
  publicPath: '/',
  source: 'src/assets',
  split: true,
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])

configuration = {
  ...configuration,
  devServer: {
    ...configuration.devServer,
    historyApiFallback: true,
  },
}

// tslint:disable-next-line:no-default-export
export default configuration
