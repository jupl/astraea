import {find} from 'globule'
import {resolve} from 'path'
import {ActionFunctions} from 'redux-actions'

interface Actions {
  [name: string]: ActionFunctions<any> // tslint:disable-line:no-any
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
      .map(String)
    expect(types).toEqual([...new Set(types)])
  })
})
