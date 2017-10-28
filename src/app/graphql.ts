import {makeExecutableSchema} from 'graphql-tools'

const typeDefs = `
  schema {
    query: Query
  }

  type Query {
    _: Boolean
  }
`

/** GraphQL schema */
export const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
})
