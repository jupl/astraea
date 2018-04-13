import * as AuthorsGQL from '../authors/graphql'
import * as CommentsGQL from '../comments/graphql'
import * as CommonGQL from '../common/graphql'
import * as PostsGQL from '../posts/graphql'
import {DAO} from './dao'

/** Context available in resolvers */
export interface Context {
  dao: DAO
}

/** Options for createContextFactory */
export interface CreateContextFactoryOptions {
  createDAO(): DAO
}

/** Resolvers for application */
export type Resolvers<C> =
  & AuthorsGQL.Resolvers<C>
  & CommentsGQL.Resolvers<C>
  & CommonGQL.Resolvers
  & PostsGQL.Resolvers<C>

/** Application schema */
export const schema = CommonGQL.createSchema<Resolvers<Context>>({
  typeDefs: [AuthorsGQL.typeDefs, CommentsGQL.typeDefs, PostsGQL.typeDefs],
  resolvers: {
    Author: {
      comments: async({comments}, _, {dao}) =>
        dao.comment.loadMany(comments),
      posts: async({posts}, _, {dao}) =>
        dao.post.loadMany(posts),
    },
    Comment: {
      author: async({author}, _, {dao}) =>
        dao.author.load(author),
      comments: async({comments}, _, {dao}) =>
        dao.comment.loadMany(comments),
      post: async({id}, _, {dao}) =>
        dao.post.loadByCommentId(id),
    },
    Post: {
      author: async({author}, _, {dao}) =>
        dao.author.load(author),
      comments: async({comments}, _, {dao}) =>
        dao.comment.loadMany(comments),
    },
    Mutation: {
      addPost: async(_, args, {dao}) =>
        dao.post.add({...args, author: 1}),
    },
    Query: {
      author: async(_, {id}, {dao}) =>
        dao.author.load(id),
      post: async(_, {id}, {dao}) =>
        dao.post.load(id),
      posts: async(_, __, {dao}) =>
        dao.post.loadAll(),
    },
  },
})

/**
 * Create context builder that would be used per request
 * @param createDAO DAO creator
 * @return Context factory run per equest
 */
export function createContextFactory({
  createDAO,
}: CreateContextFactoryOptions) {
  return function createContext(): Context {
    return {
      dao: createDAO(),
    }
  }
}
