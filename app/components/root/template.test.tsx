import {shallow} from 'enzyme'
import * as React from 'react'
import {Root} from './template'

describe('<App.Root> Template', () => {
  it('should render as expected', () => {
    expect(shallow(<Root />)).toMatchSnapshot()
  })
})
