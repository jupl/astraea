import {IResolvers, ITypedef} from 'graphql-tools/dist/Interfaces'
import * as Authors from '../authors/graphql'
import * as Comments from '../comments/graphql'
import {Value} from '../common/graphql'

/** Post schema */
export interface Post {
  id: number
  title: string
  description: string
  author: Authors.Author
  comments: Comments.Comment[]
}

/** Resolvers */
export interface Resolvers extends IResolvers {
  Post: {
    author(post: Post): Value<Authors.Author>
    comments(post: Post): Value<Comments.Comment[]>
  }
  Query: {
    posts(): Value<Post[]>
    post(root: {}, {id}: {id: Post['id']}): Value<Post>
  }
}

/**
 * Schema definition generator
 * @return Schema definition
 */
export function typeDefs(): ITypedef[] {
  return [
    `
      type Post {
        id: Int!
        title: String!
        description: String!
        author: Author!
        comments: [Comment!]!
      }

      extend type Query {
        post(id: Int!): Post!
        posts: [Post!]!
      }
    `,
    Authors.typeDefs,
    Comments.typeDefs,
  ]
}
