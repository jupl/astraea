import {Options} from 'dataloader'
import {DAO as BaseDAO} from '.'
import {Comment} from '../../comments/dao'
import {data as commentsData} from '../../comments/dao/mock'
import {AddPostArgs, Post} from '../dao'

/** Data powering DAO */
export let data: Post[] = [
  {
    id: 1,
    title: 'First post',
    description: 'First post description',
    author: 1,
    comments: [1],
  },
  {
    id: 2,
    title: 'Second post',
    description: 'Second post description',
    author: 1,
    comments: [1],
  },
]

/** DAO using mock data */
export class DAO extends BaseDAO {
  constructor(options?: Options<Post['id'], Post>) {
    super(loader, options)
  }

  /**
   * Add post and load
   * @param args Data required for a new post
   * @return New post
   */
  async add(args: AddPostArgs) {
    const id = data.length + 1
    const post: Post = {
      ...args,
      id,
      comments: [],
    }
    data = [...data, post]
    this.clear(id).prime(id, post)
    return this.load(id)
  }

  /**
   * Load all posts
   * @return All available psots
   */
  async loadAll() {
    const ids = data.map(({id}) => id)
    data.forEach(datum => this.clear(datum.id).prime(datum.id, datum))
    return this.loadMany(ids)
  }

  /**
   * Load post from comment ID
   * @param id Comment ID
   * @return Post comment is derived from
   */
  async loadByCommentId(id: Comment['id']) {
    let root = commentsData.find(c => c.id === id)
    let result: Post | undefined
    while(root !== undefined && root.comments.length !== 0) {
      root = commentsData.find(c => c.comments.includes(root!.id))
    }
    if(root !== undefined) {
      const r = root
      result = data.find(p => p.comments.includes(r.id))
    }
    if(result === undefined) {
      throw new Error(`Cannot find post with comment id: ${id}`)
    }
    return this.load(result.id)
  }
}

async function loader(ids: Post['id'][]) {
  return ids.map(id => {
    const result = data.find(datum => datum.id === id)
    if(result === undefined) {
      throw new Error(`Cannot find post with id: ${id}`)
    }
    return result
  })
}
