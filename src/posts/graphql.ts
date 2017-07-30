import {Author, schema as authorsSchema} from '../authors/graphql'
import {Comment, schema as commentsSchema} from '../comments/graphql'
import {Schema, Value} from '../common/graphql'

/** Post */
export interface Post {
  id: number
  title: string
  description: string
  author: Author
  comments: Comment[]
}

/** Queries for resolvers */
export interface Queries {
  authorFromPost(post: Post): Value<Post['author']>
  commentsFromPost(post: Post): Value<Post['comments']>
  posts(): Value<Post[]>
  post(root: {}, {id}: {id: Post['id']}): Value<Post>
}

/** Schema definition */
export function schema(): Schema[] {
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
        posts: [Post]!
      }
    `,
    authorsSchema,
    commentsSchema,
  ]
}

/**
 * Construct resolver
 * @param queries Functions that handle queries
 */
export function createResolvers({
  authorFromPost: author,
  commentsFromPost: comments,
  posts,
  post,
}: Queries) {
  return {
    Post: {author, comments},
    Query: {post, posts},
  }
}
