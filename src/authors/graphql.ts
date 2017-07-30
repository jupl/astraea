import {Comment, schema as commentsSchema} from '../comments/graphql'
import {Schema, Value} from '../common/graphql'
import {Post, schema as postsSchema} from '../posts/graphql'

/** Author */
export interface Author {
  id: number
  name: string
  comments: Comment[]
  posts: Post[]
}

/** Queries for resolvers */
export interface Queries {
  author(root: {}, args: {id: Author['id']}): Value<Author>
  commentsFromAuthor(author: Author): Value<Author['comments']>
  postsFromAuthor(author: Author): Value<Author['posts']>
}

/** Schema definition */
export function schema(): Schema[] {
  return [
    `
      type Author {
        id: Int!
        name: String!
        posts: [Post]!
        comments: [Comment!]!
      }

      extend type Query {
        author(id: Int!): Author!
      }
    `,
    commentsSchema,
    postsSchema,
  ]
}

/**
 * Construct resolver
 * @param queries Functions that handle queries
 */
export function createResolvers({
  author,
  commentsFromAuthor: comments,
  postsFromAuthor: posts,
}: Queries) {
  return {
    Author: {comments, posts},
    Query: {author},
  }
}
