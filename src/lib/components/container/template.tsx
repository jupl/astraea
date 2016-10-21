import * as React from 'react'
import {Provider} from 'react-redux'
import {Store} from 'redux'
const {AppContainer} = require('react-hot-loader')

/** Container component properties */
interface Props {
  /** Redux store instance */
  store: Store<any> // tslint:disable-line:no-any

  /** Component to render */
  component: any // tslint:disable-line:no-any
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export default function Container({store, component: Component}: Props) {
  return (
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>
  )
}
