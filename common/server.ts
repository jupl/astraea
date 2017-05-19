import {Server as HapiServer} from 'hapi'
import {IApp} from 'hapiour-decorators'

/** Base server application */
export class Server implements IApp {
  /** Hapi server instance */
  protected server: HapiServer

  constructor(server: HapiServer) {
    this.server = server
  }

  /** When app starts, output uri */
  onStart() {
    console.log('Server running at:', this.server.info.uri)
  }
}
