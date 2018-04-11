import * as Authors from '../authors/graphql'
import * as Comments from '../comments/graphql'
import * as Common from '../common/graphql'
import * as Posts from '../posts/graphql'

/** Resolvers for application */
export type Resolvers =
  & Authors.Resolvers
  & Comments.Resolvers
  & Common.Resolvers
  & Posts.Resolvers
