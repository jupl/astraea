import * as React from 'react'
import {AppContainer} from 'react-hot-loader'
import {Provider, ProviderProps} from 'react-redux'

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export function Container(props: ProviderProps) {
  return <AppContainer><Provider {...props} /></AppContainer>
}
