/** Webpack hot module API */
interface HotModuleAPI {
  /** Accept code updates */
  accept: Function
}

/** Extend module for possible addition of Webpack's hot module replacement */
interface NodeModule {
  /** Webpack's hot module replacement */
  hot?: HotModuleAPI
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}

declare module 'redux-devtools-extension/developmentOnly' {
  type DevToolsOptions = {
    [name: string]: string | number | boolean | Function | Object | undefined,
  }
  export function composeWithDevTools(option: DevToolsOptions): Function
}
