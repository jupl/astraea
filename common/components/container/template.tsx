import * as React from 'react'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {Store} from 'redux'

/** Container component properties */
interface Props<P> {
  /** Redux store instance */
  readonly store: Store<{}>

  /** Component to render */
  readonly component: React.ComponentClass<P> | (() => React.ReactElement<P>)
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export function Container<P>({store, component: Component}: Props<P>) {
  return (
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>
  )
}
