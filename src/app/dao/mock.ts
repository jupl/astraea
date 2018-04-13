import * as Authors from '../../authors/dao/mock'
import * as Comments from '../../comments/dao/mock'
import * as Posts from '../../posts/dao/mock'
import {DAO} from '../dao'

/**
 * Create dao instances using mock data
 * @return DAO instances
 */
export function createDAO(): DAO {
  return {
    author: new Authors.DAO(),
    comment: new Comments.DAO(),
    post: new Posts.DAO(),
  }
}
