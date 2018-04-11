import {CSSLoader} from 'wcb'

/** CSS loaders */
export const cssLoaders: CSSLoader[] = [
  {test: /\.css$/, use: ['css-loader']},
]
