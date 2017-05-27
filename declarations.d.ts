// Add declarations here

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}

declare module 'redux-devtools-extension/developmentOnly' {
  export * from 'redux-devtools-extension'
}
