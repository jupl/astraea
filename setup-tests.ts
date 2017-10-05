import {configure} from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

// Set up Enzyme
configure({adapter: new (Adapter as any)()}) // tslint:disable-line:no-any

// Add code to execute before tests are run
