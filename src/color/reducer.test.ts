import * as actions from './actions'
import {reducer} from './reducer'

describe('Color reducer', () => {
  // Inital state
  const state0 = reducer(undefined!, {type: ''})

  it('should start with initial state', () => {
    expect(state0).toMatchSnapshot()
  })

  it('should handle previous color', () => {
    const action = actions.previousColor(undefined)
    const state1 = reducer(state0, action)
    const state2 = reducer(state1, action)
    expect(state1).toMatchSnapshot()
    expect(state2).toMatchSnapshot()
  })

  it('should handle next color', () => {
    const action = actions.nextColor(undefined)
    const state1 = reducer(state0, action)
    const state2 = reducer(state1, action)
    expect(state1).toMatchSnapshot()
    expect(state2).toMatchSnapshot()
  })

  it('should handle auto next color', () => {
    const action = actions.autoNextColor(undefined)
    const state1 = reducer(state0, action)
    const state2 = reducer(state1, action)
    expect(state1).toMatchSnapshot()
    expect(state2).toMatchSnapshot()
  })
})
