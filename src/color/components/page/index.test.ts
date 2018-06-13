import {actions, props} from '.'

describe('<ColorPage>', () => {
  it('should inject props as expected', () => {
    const store = {
      color: 'red',
      other: 'else',
    }
    expect(props(store, {})).toMatchSnapshot()
  })

  it('should handle actions as expected', () => {
    expect(actions.onNextColor()).toMatchSnapshot()
    expect(actions.onPreviousColor()).toMatchSnapshot()
  })
})
