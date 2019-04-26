import React from 'react'
import {render} from 'react-dom'
import {AppRoot} from '~/app/components/root'

// Render application
const id = 'root'
let container = document.getElementById(id)
if(!container) {
  container = Object.assign(document.createElement('div'), {id})
  document.body.appendChild(container)
}
render(<AppRoot />, container)
