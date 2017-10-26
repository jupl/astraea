import {HapiGraphiQLPluginOptions, graphiqlHapi} from 'apollo-server-hapi'

/** Plugin to register */
export const register = graphiqlHapi

/** Options for plugin */
export const options: HapiGraphiQLPluginOptions = {
  path: '/graphiql',
  graphiqlOptions: {
    endpointURL: '/graphql',
  },
}
