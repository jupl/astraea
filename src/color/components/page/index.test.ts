import {actions, props} from '.'

describe('<ColorPage>', () => {
  it('should inject props as expected', () => {
    const store = {
      color: 'red',
      other: 'else',
    }
    expect(props(store, {})).toMatchSnapshot()
  })

  it('should inject actions as expected', () => {
    const dispatch = jest.fn()
    const {onPreviousColor, onNextColor} = actions(dispatch)
    onPreviousColor()
    onNextColor()
    expect(dispatch.mock.calls).toMatchSnapshot()
  })
})
