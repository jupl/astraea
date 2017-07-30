import {Author, schema as authorsSchema} from '../authors/graphql'
import {Schema, Value} from '../common/graphql'
import {Post, schema as postsSchema} from '../posts/graphql'

/** Comment */
export interface Comment {
  id: number
  text: String
  author: Author
  comments: Comment[]
  post: Post
}

/** Queries for resolvers */
export interface Queries {
  authorFromComment(comment: Comment): Value<Author>
  commentsFromComment(comment: Comment): Value<Comment['comments']>
  postFromComment(comment: Comment): Value<Comment['post']>
}

/** Schema definition */
export function schema(): Schema[] {
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
    authorsSchema,
    postsSchema,
  ]
}

/**
 * Construct resolver
 * @param queries Functions that handle queries
 */
export function createResolvers({
  authorFromComment: author,
  commentsFromComment: comments,
  postFromComment: post,
}: Queries) {
  return {
    Comment: {author, comments, post},
  }
}
