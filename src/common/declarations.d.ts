interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}

declare module 'redux-devtools-extension/developmentOnly' {
  type DevToolsOptions = {
    [name: string]: string | number | boolean | Function | Object | undefined,
  }
  export function composeWithDevTools(option: DevToolsOptions): Function
}
