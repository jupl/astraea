import {actions, data} from '.'

describe('<ColorPage>', () => {
  it('should inject data from store as expected', () => {
    const store = {
      color: 'red',
      other: 'else',
    }
    expect(data(store, {})).toMatchSnapshot()
  })

  it('should inject actions as expected', () => {
    const dispatch = jest.fn()
    const {onPreviousColor, onNextColor} = actions(dispatch)
    onPreviousColor()
    onNextColor()
    expect(dispatch.mock.calls).toMatchSnapshot()
  })
})
