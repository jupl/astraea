import * as DataLoader from 'dataloader'
import {Author} from '../../authors/dao'
import {Comment} from '../../comments/dao'

/** Base post schema */
export interface BasePost {
  id: number
  title: string
  description: string
}

/** Post schema */
export interface Post extends BasePost {
  author: Author['id']
  comments: Comment['id'][]
}

/** Add post arguments */
export type AddPostArgs = Pick<Post, 'author' | 'description' | 'title'>

/** Posts DAO */
export abstract class DAO extends DataLoader<Post['id'], Post> {
  /**
   * Add post and load
   * @param args Data required for a new post
   */
  abstract add(args: AddPostArgs): Promise<Post>

  /** Load all posts */
  abstract loadAll(): Promise<Post[]>

  /**
   * Load post from comment ID
   * @param id Comment ID
   */
  abstract loadByCommentId(id: Comment['id']): Promise<Post>
}
