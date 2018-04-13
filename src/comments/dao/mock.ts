import {Options} from 'dataloader'
import {DAO as BaseDAO} from '.'
import {Comment} from '../dao'

/** Data powering DAO */
export let data: Comment[] = [
  {
    id: 1,
    text: 'First post comment',
    author: 1,
    comments: [2], // tslint:disable-line:no-magic-numbers
    post: undefined!,
  },
  {
    id: 2,
    text: 'First post comment reply',
    author: 2,
    comments: [],
    post: undefined!,
  },
]

/** DAO using mock data */
export class DAO extends BaseDAO {
  constructor(options?: Options<Comment['id'], Comment>) {
    super(loader, options)
  }
}

async function loader(ids: Comment['id'][]) {
  return ids.map(id => {
    const result = data.find(datum => datum.id === id)
    if(result === undefined) {
      throw new Error(`Cannot find comment with id: ${id}`)
    }
    return result
  })
}
