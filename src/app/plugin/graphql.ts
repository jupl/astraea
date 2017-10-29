import {HapiPluginOptions, graphqlHapi} from 'apollo-server-hapi'
import {createSchema} from '../graphql'
import {resolvers} from '../resolvers'

/** Plugin to register */
export const register = graphqlHapi

/** Options for plugin */
export const options: HapiPluginOptions = {
  path: '/graphql',
  graphqlOptions: {schema: createSchema({resolvers})},
}
