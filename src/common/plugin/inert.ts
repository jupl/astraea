import {Server} from 'hapi'
import * as inert from 'inert'
import {resolve} from '../path'

Object.assign(register, {attributes: {name: 'common-inert'}})

/**
 * Add static resources
 * @param server Hapi server instance
 * @param _options Unused options
 * @param next Post callback
 */
export async function register(server: Server, _options: {}, next: Function) {
  await server.register(inert as any) // tslint:disable-line:no-any
  server.route({
    method: 'GET',
    path: '/{p*}',
    handler: {
      directory: {
        path: resolve('assets'),
      },
    },
  })
  next()
}
