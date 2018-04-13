import {HapiPluginOptions} from 'apollo-server-hapi'
import {createDAO} from '../dao/mock'
import {createContextFactory, schema} from '../graphql'

// Plugin
export {graphqlHapi as plugin} from 'apollo-server-hapi'

/** Options for plugin */
export const options: HapiPluginOptions = {
  path: '/graphql',
  graphqlOptions: {
    context: createContextFactory({createDAO}),
    rootValue: {},
    schema,
  },
}
