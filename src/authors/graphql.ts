import {Comment, schema as commentsSchema} from '../comments/graphql'
import {Schema, Value} from '../common/graphql'
import {Post, schema as postsSchema} from '../posts/graphql'

/** Author */
export interface Author {
  id: number
  name: string
  comments: Comment[]
  commentIds: Comment['id'][]
  posts: Post[]
  postIds: Post['id'][]
}

/** Queries for resolvers */
export interface Queries {
  author(root: {}, args: {id: Author['id']}): Value<Author>
  postsFromAuthor(author: Author): Value<Post[]>
  commentsFromAuthor(author: Author): Value<Comment[]>
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
