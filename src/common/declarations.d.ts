interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}

declare module 'redux-devtools-extension/developmentOnly' {
  type DevToolsOptions = {
    [name: string]: string | number | boolean | Function | Object | undefined,
  }
  export function composeWithDevTools(option: DevToolsOptions): Function
}

declare module 'colors.css' {
  export const blue: string
  export const aqua: string
  export const lime: string
  export const navy: string
  export const teal: string
  export const olive: string
  export const green: string
  export const red: string
  export const maroon: string
  export const orange: string
  export const purple: string
  export const yellow: string
  export const fuchsia: string
  export const gray: string
  export const white: string
  export const black: string
  export const silver: string
}
