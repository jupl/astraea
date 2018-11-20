import {find} from 'globule'
import {resolve} from 'path'

interface Context {
  INITIAL_CONTEXT: {}
}

describe('Contexts', () => {
  const files: string[] = find(resolve(__dirname, '../*/context/*.ts{,x}'))
    .filter(x => !x.includes('test'))
  const contextTable = files.map(file => require(file) as Context)

  it('should have unique names for properties', () => {
    const names = contextTable
      .map(({INITIAL_CONTEXT}) => Object.keys(INITIAL_CONTEXT))
      .reduce((array, keys) => [...array, ...keys], [])
    expect(names).toEqual([...new Set(names)])
  })
})
