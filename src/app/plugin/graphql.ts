import {HapiPluginOptions} from 'apollo-server-hapi'
import {schema} from '../graphql/mock'

// Plugin
export {graphqlHapi as plugin} from 'apollo-server-hapi'

/** Options for plugin */
export const options: HapiPluginOptions = {
  path: '/graphql',
  graphqlOptions: {schema},
}
