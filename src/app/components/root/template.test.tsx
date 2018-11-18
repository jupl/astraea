import {shallow} from 'enzyme'
import React from 'react'
import {AppRoot} from './template'

describe('<AppRoot> Template', () => {
  it('should render as expected', () => {
    expect(shallow(<AppRoot />)).toMatchSnapshot()
  })
})
