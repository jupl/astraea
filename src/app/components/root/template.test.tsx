import * as React from 'react'
import {Provider} from 'react-redux'
import {create} from 'react-test-renderer'
import Root from './template'
import reducer from '../../reducer'
import createStore from '../../../common/create-store'

describe('<App.Root> Template', () => {
  const store = createStore({reducer})

  it('should render as expected', () => {
    const component = create((
      <Provider store={store}>
        <Root />
      </Provider>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
