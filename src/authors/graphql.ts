import {IResolvers, ITypedef} from 'graphql-tools'
import * as Comments from '../comments/graphql'
import {Value} from '../common/graphql'
import * as Posts from '../posts/graphql'

/** Author schema */
export interface Author {
  id: number
  name: string
  comments: Comments.Comment[]
  posts: Posts.Post[]
}

// Arguments for author query
type AuthorArgs = Pick<Author, 'id'>

/** Resolvers */
export interface Resolvers extends IResolvers {
  Author: {
    comments(author: Author): Value<Comments.Comment[]>
    posts(author: Author): Value<Posts.Post[]>
  }
  Query: {
    author(root: {}, args: AuthorArgs): Value<Author>
  }
}

/**
 * Schema definition generator
 * @return Schema definition
 */
export function typeDefs(): ITypedef[] {
  return [
    `
      type Author {
        id: Int!
        name: String!
        posts: [Post!]!
        comments: [Comment!]!
      }

      extend type Query {
        author(id: Int!): Author!
      }
    `,
    Comments.typeDefs,
    Posts.typeDefs,
  ]
}
