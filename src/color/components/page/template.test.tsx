import {mount, shallow} from 'enzyme'
import * as React from 'react'
import {Button, ColorPage} from './template'

describe('<ColorPage> Template', () => {
  const props = {
    nextColor: jest.fn(),
    previousColor: jest.fn(),
    selectedColor: 'white',
  }

  it('should render as expected', () => {
    expect(shallow(<ColorPage {...props} />)).toMatchSnapshot()
  })

  it('should invoke events as expected', () => {
    const component = mount(<ColorPage {...props} />)
    const buttons = component.find(Button)
    const previousButton = buttons.at(0)
    const nextButton = buttons.at(1)

    expect(props.previousColor).not.toBeCalled()
    expect(props.nextColor).not.toBeCalled()

    previousButton.simulate('click')
    expect(props.previousColor.mock.calls.length).toBe(1)
    expect(props.nextColor).not.toHaveBeenCalled()

    nextButton.simulate('click')
    expect(props.previousColor.mock.calls.length).toBe(1)
    expect(props.nextColor.mock.calls.length).toBe(1)
  })
})
