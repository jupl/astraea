import {createGlobalStyle} from 'styled-components'

interface Props {
  color: string
}

/** Apply styling to page for background */
export const GlobalStyle = createGlobalStyle<Props>`
  html {
    transition: background 0.8s ease-out;
    background-color: ${({color}) => color};
  }

  body {
    background: linear-gradient(rgba(255,255,255,0.4), transparent) !important;
  }
`
