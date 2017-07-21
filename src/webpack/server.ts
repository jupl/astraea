import {Server} from 'hapi'
import * as webpack from './plugin'

const RADIX = 10
const DEFAULT_PORT = 3000
const envPort = process.env.PORT
let port = parseInt(envPort !== undefined ? envPort : '', RADIX)
if(isNaN(port)) {
  port = DEFAULT_PORT
}

(async() => { // tslint:disable-line:no-floating-promises
  const server = new Server()
  server.connection({port})
  await server.register(webpack)
  await server.start()
  console.log('Server running at:', server.info!.uri)
})()
