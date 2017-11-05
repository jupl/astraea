import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {createBrowserHistory} from 'history'
import 'normalize.css'
import * as React from 'react'
import {render as renderToDOM} from 'react-dom'
import {connectRoutes} from 'redux-first-router'
import {AppRoot} from '../app/components/root'
import {createReducer} from '../app/reducer'
import {routes} from '../app/routes'
import {Container} from '../common/components/container'
import {createStore} from '../common/store'

// Reference app container to render to
const container = document.getElementById('container')!

// Set up Apollo
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({uri: '/graphql'}),
})

// Set up Redux
const history = createBrowserHistory()
const router = connectRoutes(history, routes)
const store = createStore({
  enhancers: [router.enhancer],
  middlewares: [router.middleware],
  reducer: createReducer({location: router.reducer}),
})

// Render application. Also register to rerender if hot loading is available.
if(module.hot) { // tslint:disable-line:strict-boolean-expressions
  module.hot.accept('../app/components/root', render)
  module.hot.accept('../app/reducer', updateReducer)
  module.hot.accept('../app/routes', () => true)
  module.hot.accept('../common/components/container', render)
}
render()

/**
 * Render application to the container. If we are not in production and an
 * error is encountered the error is rendered to the screen. This may be called
 * multiple times to rerender when a hot reload occurs.
 */
function render() {
  const component = (
    <Container store={store} client={client}>
      <AppRoot />
    </Container>
  )
  renderToDOM(component, container)
}

/**
 * Update the reducer for the store. This may be called multiple times when a
 * hot reload occurs.
 */
function updateReducer() {
  store.replaceReducer(createReducer({location: router.reducer}))
}
