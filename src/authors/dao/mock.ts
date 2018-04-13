import {Options} from 'dataloader'
import {Author, DAO as BaseDAO} from '.'

/** Data powering DAO */
export let data: Author[] = [
  {
    id: 1,
    name: 'John Doe',
    comments: [1],
    posts: [1],
  },
  {
    id: 2,
    name: 'Jane Doe',
    comments: [],
    posts: [],
  },
]

/** DAO using mock data */
export class DAO extends BaseDAO {
  constructor(options?: Options<Author['id'], Author>) {
    super(loader, options)
  }
}

async function loader(ids: Author['id'][]) {
  return ids.map(id => {
    const result = data.find(datum => datum.id === id)
    if(result === undefined) {
      throw new Error(`Cannot find author with id: ${id}`)
    }
    return result
  })
}
