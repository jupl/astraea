import {colors} from '@material-ui/core'
import React from 'react'
import {render} from 'react-dom'
import {AppRoot} from '../app/components/root'
import {Container} from '../common/components/container'
import {theme} from '../common/theme'

const COLORS: [string, ...string[]] = [
  colors.teal[300],
  colors.green[300],
  colors.yellow[300],
  colors.orange[300],
]

// Prevent unnecessary module refresh
if(module.hot) {
  module.hot.accept()
}

// Render application
const ID = 'root'
let container = document.getElementById(ID)
if(!container) {
  container = Object.assign(document.createElement('div'), {id: ID})
  document.body.appendChild(container)
}
render((
  <Container theme={theme}><AppRoot colors={COLORS} /></Container>
), container)
