import {shallow} from 'enzyme'
import * as React from 'react'
import {Button, ColorPage} from './template'

describe('<Color.ColorPage> Template', () => {
  const props = {
    color: 'white',
    onPreviousColor: jest.fn(),
    onNextColor: jest.fn(),
  }

  it('should render as expected', () => {
    expect(shallow(<ColorPage {...props} />)).toMatchSnapshot()
  })

  it('should invoke events as expected', () => {
    const component = shallow(<ColorPage {...props} />)
    const buttons = component.find(Button)
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
