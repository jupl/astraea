import {props} from '.'

describe('<ColorPage>', () => {
  it('should inject props as expected', () => {
    const store = {
      color: 'red',
      other: 'else',
    }
    expect(props(store, {})).toMatchSnapshot()
  })
})
