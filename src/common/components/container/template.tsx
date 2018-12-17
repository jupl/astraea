import {CssBaseline, MuiThemeProvider, Theme} from '@material-ui/core'
import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
  theme: Theme
}

/**
 * Render container component
 * @return Decorated component
 */
export const Container = ({children, theme}: Props) => (
  <>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </>
)
