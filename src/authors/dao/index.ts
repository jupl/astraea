import * as DataLoader from 'dataloader'
import {Comment} from '../../comments/dao'
import {Post} from '../../posts/dao'

/** Base author schema */
export interface BaseAuthor {
  id: number
  name: string
}

/** Author schema */
export interface Author extends BaseAuthor {
  comments: Comment['id'][]
  posts: Post['id'][]
}

/** Authors schema */
export abstract class DAO extends DataLoader<Author['id'], Author> {}
