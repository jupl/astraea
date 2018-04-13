import {IResolvers, ITypedef} from 'graphql-tools/dist/Interfaces'
import {Author} from '../authors/dao'
import * as AuthorsGQL from '../authors/graphql'
import {Value} from '../common/graphql'
import {Post} from '../posts/dao'
import * as PostsGQL from '../posts/graphql'
import * as DAO from './dao'

/** Comment schema */
export interface Comment extends DAO.BaseComment {
  author: AuthorsGQL.Author
  comments: Comment[]
  post: PostsGQL.Post
}

/** Resolvers */
export interface Resolvers extends IResolvers {
  Comment: {
    author(comment: DAO.Comment): Value<Author>
    comments(comment: DAO.Comment): Value<DAO.Comment[]>
    post(comment: DAO.Comment): Value<Post>
  }
}

/**
 * Schema definition generator
 * @return Schema definition
 */
export function typeDefs(): ITypedef[] {
  return [
    `
      type Comment {
        id: Int!
        text: String!
        author: Author!
        comments: [Comment!]!
        post: Post!
      }
    `,
    AuthorsGQL.typeDefs,
    PostsGQL.typeDefs,
  ]
}
