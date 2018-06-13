import {find} from 'globule'
import {resolve} from 'path'

interface Actions {
  [name: string]: Function
}

describe('Actions', () => {
  const files: string[] = find(resolve(__dirname, '../*/actions.ts'))
  const actionsTable = files.map(file => require(file) as Actions)

  it('should be unique names', () => {
    const names = actionsTable
      .map(actions => Object.keys(actions))
      .reduce((array, keys) => [...array, ...keys], [])
    expect(names).toEqual([...new Set(names)])
  })

  it('should be unique action types', () => {
    const types = actionsTable
      .map(actions => Object.keys(actions).map(x => actions[x]))
      .reduce((array, actions) => [...array, ...actions], [])
      .map(action => action().type)
    expect(types).toEqual([...new Set(types)])
  })
})
