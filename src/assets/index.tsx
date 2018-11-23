import React from 'react'
import {render as renderToDOM} from 'react-dom'
import {AppRoot} from '../app/components/root'
import {Container} from '../common/components/container'

// Reference app container to render to
const ID = 'container'
let container = document.getElementById(ID)
if(container === null) {
  container = Object.assign(document.createElement('div'), {id: ID})
  document.body.appendChild(container)
}

// Render application. Also register to rerender if hot loading is available.
if(module.hot) { // tslint:disable-line:strict-boolean-expressions
  module.hot.accept('../app/components/root', render)
  module.hot.accept('../common/components/container', render)
}
render()

/**
 * Render application to the container. If we are not in production and an
 * error is encountered the error is rendered to the screen. This may be called
 * multiple times to rerender when a hot reload occurs.
 */
function render() {
  renderToDOM(<Container><AppRoot /></Container>, container)
}
