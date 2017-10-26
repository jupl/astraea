import {HapiPluginOptions, graphqlHapi} from 'apollo-server-hapi'
import {schema} from '../graphql'

/** Plugin to register */
export const register = graphqlHapi

/** Options for plugin */
export const options: HapiPluginOptions = {
  path: '/graphql',
  graphqlOptions: {schema},
}
