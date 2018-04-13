import {IResolvers, ITypedef} from 'graphql-tools'
import {Author} from '../authors/dao'
import * as AuthorsGQL from '../authors/graphql'
import {Comment} from '../comments/dao'
import * as CommentsGQL from '../comments/graphql'
import {Value} from '../common/graphql'
import * as DAO from './dao'

/** Post schema */
export interface Post extends DAO.BasePost {
  author: AuthorsGQL.Author
  comments: CommentsGQL.Comment[]
}

/** Arguments for post query */
export type PostArgs = Pick<Post, 'id'>

/** Arguments for add post mutation */
export type AddPostArgs = Pick<Post, 'title' | 'description'>

/** Resolvers */
export interface Resolvers<C> extends IResolvers<{}, C> {
  Post: {
    author(post: DAO.Post, args: {}, context: C): Value<Author>
    comments(post: DAO.Post, args: {}, context: C): Value<Comment[]>
  }
  Mutation: {
    addPost(root: {}, args: AddPostArgs, context: C): Value<DAO.Post>
  }
  Query: {
    posts(root: {}, args: {}, context: C): Value<DAO.Post[]>
    post(root: {}, args: PostArgs, context: C): Value<DAO.Post>
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
    AuthorsGQL.typeDefs,
    CommentsGQL.typeDefs,
  ]
}
