import {HapiGraphiQLPluginOptions} from 'apollo-server-hapi'

// Plugin
export {graphiqlHapi as plugin} from 'apollo-server-hapi'

/** Options for plugin */
export const options: HapiGraphiQLPluginOptions = {
  path: '/graphiql',
  graphiqlOptions: {
    endpointURL: '/graphql',
  },
}
