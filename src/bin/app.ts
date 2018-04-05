import {Server} from 'hapi'
import * as graphql from '../app/plugin/graphql'

const DEFAULT_PORT = 3000
const envPort = process.env.PORT
let port = parseInt(envPort !== undefined ? envPort : '', 10)
const security = process.env.NODE_ENV !== 'development'
if(isNaN(port)) {
  port = DEFAULT_PORT
}

(async() => { // tslint:disable-line:no-floating-promises
  // Declare plugins for server to use
  // TODO require -> import
  let plugins = [graphql]
  if(process.env.NODE_ENV !== 'development') {
    plugins = [
      ...plugins,
      require('../common/plugin/inert'),
    ]
  }
  else {
    plugins = [
      ...plugins,
      require('../app/plugin/graphiql'),
      require('../webpack/plugin'),
    ]
    if(process.env.HOT_MODULES === 'true') {
      process.on('SIGTERM', () => process.exit(0))
    }
  }

  // Set up and start server
  const server = new Server({port, routes: {security}})
  await server.register(plugins)
  await server.start()
  console.log('Server running at:', server.info.uri)
})()
