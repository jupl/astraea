import {Server} from 'hapi'
import * as graphql from '../app/plugin/graphql'

const RADIX = 10
const DEFAULT_PORT = 3000
const envPort = process.env.PORT
let port = parseInt(envPort !== undefined ? envPort : '', RADIX)
const security = process.env.NODE_ENV !== 'development'
if(isNaN(port)) {
  port = DEFAULT_PORT
}

(async() => { // tslint:disable-line:no-floating-promises
  // Declare plugins for server to use
  let plugins = [graphql]
  if(process.env.NODE_ENV === 'development') {
    plugins = [
      ...plugins,
      require('../app/plugin/graphiql'),
      require('../webpack/plugin'),
    ]
  }
  else {
    plugins = [
      ...plugins,
      require('../common/plugin/inert'),
    ]
  }

  // Set up and start server
  const server = new Server()
  server.connection({port, routes: {security}})
  await server.register(plugins)
  await server.start()
  console.log('Server running at:', server.info!.uri)
})()
