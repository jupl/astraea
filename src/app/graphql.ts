import * as AuthorsGQL from '../authors/graphql'
import * as CommentsGQL from '../comments/graphql'
import * as CommonGQL from '../common/graphql'
import * as PostsGQL from '../posts/graphql'
import {DAO} from './dao'

/** Resolvers for application */
export type Resolvers =
  & AuthorsGQL.Resolvers
  & CommentsGQL.Resolvers
  & CommonGQL.Resolvers
  & PostsGQL.Resolvers

/**
 * Build a GraphQL schema given DAOs
 * @param createDAO DAO factory
 * @return GraphQL schema
 */
export function createSchema(createDAO: () => DAO) {
  const dao = createDAO()
  return CommonGQL.createSchema<Resolvers>({
    typeDefs: [AuthorsGQL.typeDefs, CommentsGQL.typeDefs, PostsGQL.typeDefs],
    resolvers: {
      Author: {
        comments: async({comments}) => dao.comment.loadMany(comments),
        posts: async({posts}) => dao.post.loadMany(posts),
      },
      Comment: {
        author: async({author}) => dao.author.load(author),
        comments: async({comments}) => dao.comment.loadMany(comments),
        post: async({id}) => dao.post.loadByCommentId(id),
      },
      Post: {
        author: async({author}) => dao.author.load(author),
        comments: async({comments}) => dao.comment.loadMany(comments),
      },
      Mutation: {
        addPost: async(_, {title, description}) =>
          dao.post.add({author: 1, description, title}),
      },
      Query: {
        author: async(_, {id}) => dao.author.load(id),
        post: async(_, {id}) => dao.post.load(id),
        posts: async() => dao.post.loadAll(),
      },
    },
  })
}
