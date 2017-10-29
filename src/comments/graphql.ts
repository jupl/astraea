import {IResolvers, ITypedef} from 'graphql-tools/dist/Interfaces'
import * as Authors from '../authors/graphql'
import {Value} from '../common/graphql'
import * as Posts from '../posts/graphql'

/** Comment schema */
export interface Comment {
  id: number
  text: string
  author: Authors.Author
  comments: Comment[]
  post: Posts.Post
}

/** Resolvers */
export interface Resolvers extends IResolvers {
  Comment: {
    author(comment: Comment): Value<Authors.Author>
    comments(comment: Comment): Value<Comment[]>
    post(comment: Comment): Value<Posts.Post>
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
    Authors.typeDefs,
    Posts.typeDefs,
  ]
}
