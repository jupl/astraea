import {props, actions} from '.'

describe('<Color.ColorPage>', () => {
  it('should inject props from store as expected', () => {
    const store = {
      color: 'red',
      other: 'else',
    }
    const style = {flex: 1}
    expect(props(store, {})).toMatchSnapshot()
    expect(props(store, {style})).toMatchSnapshot()
  })

  it('should inject action props as expected', () => {
    const dispatch = jest.fn()
    const {onPreviousColor, onNextColor} = actions(dispatch)
    onPreviousColor()
    onNextColor()
    expect(dispatch.mock.calls).toMatchSnapshot()
  })
})
