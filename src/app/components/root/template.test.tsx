import {shallow} from 'enzyme'
import * as React from 'react'
import {AppRoot} from './template'

describe('<AppRoot> Template', () => {
  it('should render as expected', () => {
    expect(shallow(<AppRoot component={FauxComponent} />)).toMatchSnapshot()
  })
})

function FauxComponent() {
  return <div>Hello, world</div>
}
