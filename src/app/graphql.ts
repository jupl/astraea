import * as merge from 'deepmerge'
import {makeExecutableSchema} from 'graphql-tools'

const appSchema = `
  schema {
    query: Query
  }

  type Query {
    _: Boolean
  }
`

/** GraphQL schema */
export const schema = makeExecutableSchema({
  typeDefs: [appSchema],
  resolvers: merge.all([]),
})
