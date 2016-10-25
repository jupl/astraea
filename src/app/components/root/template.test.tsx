import * as React from 'react'
import {Provider} from 'react-redux'
import Root from './template'
import reducer from '../../reducer'
import createStore from '../../../common/create-store'
const renderer = require('react-test-renderer')

describe('<App.Root> Template', () => {
  const store = createStore({reducer})

  it('should render as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Root />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
