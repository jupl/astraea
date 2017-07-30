import * as React from 'react'
import {ApolloClient} from 'react-apollo'
import {render as renderToDOM} from 'react-dom'
import 'semantic-ui-less/definitions/globals/reset.less'
import 'semantic-ui-less/definitions/globals/site.less'
import {AppRoot} from '../app/components/root'
import {createReducer} from '../app/reducer'
import {saga} from '../app/saga'
import {Container} from '../common/components/container'
import {createStore} from '../common/store'

// Reference app container to render to
const container = document.getElementById('container')!

// Set up Apollo and Redux
const client = new ApolloClient()
const reducer = createReducer({apollo: client.reducer()})
const store = createStore({reducer, saga, middlewares: [client.middleware()]})

// Render application. Also register to rerender if hot loading is available.
if(module.hot) { // tslint:disable-line:strict-boolean-expressions
  module.hot.accept('../app/components/root', render)
  module.hot.accept('../app/reducer', updateReducer)
  module.hot.accept('../app/saga', () => true)
  module.hot.accept('../common/components/container', render)
}
render()

/**
 * Render application to the container. If we are not in production and an
 * error is encountered the error is rendered to the screen. This may be called
 * multiple times to rerender when a hot reload occurs.
 */
function render() {
  renderToDOM(
    <Container client={client} store={store} component={AppRoot} />,
    container)
}

/**
 * Update the reducer for the store. This may be called multiple times when a
 * hot reload occurs.
 */
function updateReducer() {
  store.replaceReducer(reducer)
}
