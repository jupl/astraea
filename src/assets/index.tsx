import React from 'react'
import {render} from 'react-dom'
import {AppRoot} from '../app/components/root'

// Render application
const ID = 'root'
let container = document.getElementById(ID)
if(!container) {
  container = Object.assign(document.createElement('div'), {id: ID})
  document.body.appendChild(container)
}
render(<AppRoot />, container)
