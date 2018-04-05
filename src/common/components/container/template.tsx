import * as React from 'react'
import {hot} from 'react-hot-loader'
import {Provider, ProviderProps} from 'react-redux'

/** Render container component adding possible dev tools and redux store */
export const Container = hot(module)((props: ProviderProps) => (
  <Provider {...props} />
))
