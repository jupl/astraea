import 'normalize.css/normalize.css'
import * as React from 'react'
import {render as renderToDOM} from 'react-dom'
import Root from './app/components/root'
import reducer from './app/reducer'
import saga from './app/saga'
import {CONTAINER_STYLE} from './app/styles'
import Container from './common/components/container'
import createStore from './common/create-store'

// Reference app container to render to
const container = document.getElementById('container')!

// Create Redux store instance
const store = createStore({reducer, saga})

// Style container and render application. Also register to rerender/restyle if
// hot loading is available.
if(module.hot) {
  module.hot.accept('./app/components/root', () => setTimeout(render))
  module.hot.accept('./app/reducer', () => setTimeout(updateReducer))
  module.hot.accept('./app/styles', () => setTimeout(styleContainer))
  module.hot.accept('./app/saga', () => true)
  module.hot.accept('./common/components/container', () => setTimeout(render))
}
styleContainer()
render()

/**
 * Render application to the container. If we are not in production and an
 * error is encountered the error is rendered to the screen. This may be called
 * multiple times to rerender when a hot reload occurs.
 */
function render() {
  renderToDOM(<Container store={store} component={Root} />, container)
}

/**
 * Style container. This may be called multiple times to rerender when a hot
 * reload occurs.
 */
function styleContainer() {
  container.style.cssText = ''
  Object.assign(container.style, CONTAINER_STYLE)
}

/**
 * Update the reducer for the store. This may be called multiple times when a
 * hot reload occurs.
 */
function updateReducer() {
  store.replaceReducer(reducer)
}
