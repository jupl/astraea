import {configure} from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

// Set up Enzyme
configure({adapter: new (Adapter as any)()}) // tslint:disable-line:no-any

// For React 16
Object.assign(global, {
  requestAnimationFrame(callback: Function) {
    setTimeout(callback, 0)
  },
})

// Add code to execute before tests are run
