import {HapiPluginOptions} from 'apollo-server-hapi'
import {createDAO} from '../dao/mock'
import {createContext, schema} from '../graphql'

const ROOT = {}

// Plugin
export {graphqlHapi as plugin} from 'apollo-server-hapi'

/** Options for plugin */
export const options: HapiPluginOptions = {
  path: '/graphql',
  graphqlOptions: () => ({
    context: createContext({createDAO}),
    rootValue: ROOT,
    schema,
  }),
}
