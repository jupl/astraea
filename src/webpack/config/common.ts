/** CSS loaders */
export const cssLoaders = [
  {test: /\.css$/, use: ['css-loader']},
  {test: /\.less$/, use: [
    'css-loader',
    'semantic-ui-less-module-loader',
  ]},
]
