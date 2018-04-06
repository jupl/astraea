import {makeExecutableSchema} from 'graphql-tools'
import {
  IExecutableSchemaDefinition,
  IResolvers,
  ITypedef,
} from 'graphql-tools/dist/Interfaces'

const typeDef = `
  schema {
    mutation: Mutation
    query: Query
  }

  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }
`

interface Options<R extends IResolvers> extends IExecutableSchemaDefinition {
  typeDefs: ITypedef[]
  resolvers: R & Resolvers
}

/** Resolvers required across all schemas */
// tslint:disable:no-empty-interface
export interface Resolvers {}

/** Return value for queries */
export type Value<T> = T | Promise<T>

/**
 * Generate GraphQL schema
 * @param options Options for generating schema
 * @return GraphQL schema definition
 */
export function createSchema<R extends IResolvers>(options: Options<R>) {
  return makeExecutableSchema({
    ...options,
    typeDefs: [typeDef, ...options.typeDefs],
  })
}
