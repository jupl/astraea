import {WithTheme, withTheme} from '@material-ui/core'
import {createGlobalStyle} from 'styled-components'

const appbarPadding = ({theme}: WithTheme) => Object
  .entries(theme.mixins.toolbar)
  .map(([key, value]) => key.startsWith('@') && typeof value === 'object'
    ? `${key}{padding-top:${value.minHeight}px}`
    : '')
  .join('')

const breakpointSizing = ({theme: {breakpoints}}: WithTheme) => breakpoints
  .keys
  .slice(1)
  .map(k => `${breakpoints.only(k)}{max-width:${breakpoints.values[k]}px}`)
  .join('')

/** Add padding and breakpoint width to body */
export const GlobalStyle = withTheme()(createGlobalStyle<WithTheme>`
  #root {
    display: flex;
    margin: 0 auto;
    min-height: 100vh;
    padding-top: ${({theme}) => theme.mixins.toolbar.minHeight}px;
    ${appbarPadding}
    ${breakpointSizing}
  }
`)
