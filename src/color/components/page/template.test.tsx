import * as React from 'react'
import {shallow} from 'enzyme'
import {create} from 'react-test-renderer'
import ColorPage, {Button} from './template'

describe('<Color.ColorPage> Template', () => {
  const props = {
    color: 'white',
    onPreviousColor: jest.fn(),
    onNextColor: jest.fn(),
  }

  it('should render as expected', () => {
    const component = create(<ColorPage {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
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
