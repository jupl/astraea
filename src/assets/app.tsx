import * as colors from 'colors.css'
import 'normalize.css'
import React from 'react'
import {render as renderToDOM} from 'react-dom'
import {AppRoot} from '../app/components/root'
import {Container} from '../common/components/container'

const COLORS: [string, ...string[]] = [
  colors.teal,
  colors.green,
  colors.yellow,
  colors.orange,
]

// Reference app container to render to
const container = document.getElementById('container')!

// Render application. Also register to rerender if hot loading is available.
if(module.hot !== undefined) {
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
  renderToDOM(<Container><AppRoot colors={COLORS} /></Container>, container)
}
