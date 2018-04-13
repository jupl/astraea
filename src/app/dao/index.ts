import * as Authors from '../../authors/dao'
import * as Comments from '../../comments/dao'
import * as Posts from '../../posts/dao'

/** DAO interfaces */
export interface DAO {
  author: Authors.DAO
  comment: Comments.DAO
  post: Posts.DAO
}
