import * as React from 'react'
import {Provider} from 'react-redux'
import {Store} from 'redux'
const {AppContainer} = require('react-hot-loader')

/** Container component properties */
interface Props<P> {
  /** Redux store instance */
  store: Store<any> // ts-lint:disable-line:no-any

  /** Component to render */
  component: React.ComponentClass<P> | (() => React.ReactElement<P>)
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export default function Container<P>({store, component: Component}: Props<P>) {
  return (
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>
  )
}
