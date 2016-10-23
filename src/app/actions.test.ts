import {resolve} from 'path'
const {find} = require('globule')

interface Actions {
  [name: string]: Function
}

describe('Actions', () => {
  const files: string[] = find(resolve(__dirname, '../*/actions.js'))
  const actionsTable: Actions[] = files.map(require)

  it('should be unique names', () => {
    const names = actionsTable
      .map(Object.keys)
      .reduce((array, keys) => [...array, ...keys], [])
    expect(names).toEqual([...new Set(names)])
  })

  it('should be unique action types', () => {
    const types = actionsTable
      .map(actions => Object.keys(actions).map(x => actions[x]))
      .reduce((array, actions) => [...array, ...actions], [])
      .map(String)
    expect(types).toEqual([...new Set(types)])
  })
})
