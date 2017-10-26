import {ICSSLoader} from 'wcb'

/** CSS loaders */
export const cssLoaders: ICSSLoader[] = [
  {test: /\.css$/, use: ['css-loader']},
]
