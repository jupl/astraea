import * as DataLoader from 'dataloader'
import {Author} from '../../authors/dao'
import {Post} from '../../posts/dao'

/** Base comment schema */
export interface BaseComment {
  id: number
  text: string
}

/** Comment schema */
export interface Comment extends BaseComment {
  author: Author['id']
  comments: Comment['id'][]
  post: Post['id']
}

/** Comments dao */
export abstract class DAO extends DataLoader<Comment['id'], Comment> {}
