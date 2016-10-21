import * as React from 'react'
import {shallow} from 'enzyme'
import ColorPage from './template'

describe('<Color.ColorPage> Template', () => {
  const props = {
    color: 'white',
    onPreviousColor: jest.fn(),
    onNextColor: jest.fn(),
  }

  // TODO Enable test and move require to top when React has fix
  xit('should render as expected', () => {
    const renderer = require('react-test-renderer')
    const propsWithStyle = Object.assign({}, props, {style: {top: 0}})
    const component1 = renderer.create(<ColorPage {...props} />)
    const component2 = renderer.create(<ColorPage {...propsWithStyle} />)
    expect(component1.toJSON()).toMatchSnapshot()
    expect(component2.toJSON()).toMatchSnapshot()
  })

  it('should invoke events as expected', () => {
    const component = shallow(<ColorPage {...props} />)
    const buttons = component.find('button')
    const previousButton = buttons.at(0)
    const nextButton = buttons.at(1)

    expect(props.onPreviousColor).not.toBeCalled()
    expect(props.onNextColor).not.toBeCalled()

    previousButton.simulate('click')
    expect(props.onPreviousColor.mock.calls.length).toBe(1)
    expect(props.onNextColor).not.toHaveBeenCalled()

    nextButton.simulate('click')
    expect(props.onPreviousColor.mock.calls.length).toBe(1)
    expect(props.onNextColor.mock.calls.length).toBe(1)
  })
})
