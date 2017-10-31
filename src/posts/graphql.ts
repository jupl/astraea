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

/** Arguments for post query */
export type PostArgs = Pick<Post, 'id'>

/** Arguments for add post mutation */
export type AddPostArgs = Pick<Post, 'title' | 'description'>

/** Resolvers */
export interface Resolvers extends IResolvers {
  Post: {
    author(post: Post): Value<Authors.Author>
    comments(post: Post): Value<Comments.Comment[]>
  }
  Mutation: {
    addPost(root: {}, args: AddPostArgs): Value<Post>
  }
  Query: {
    posts(): Value<Post[]>
    post(root: {}, args: PostArgs): Value<Post>
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

      extend type Mutation {
        addPost(title: String!, description: String!): Post!
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
