import {AppBar, CircularProgress, Toolbar, Typography} from '@material-ui/core'
import React, {ComponentProps, Suspense} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {GlobalStyle} from './global'

/**
 * Render root component representing the entire application
 * @return Root component
 */
export const AppRoot = () => (
  <Router>
    <>
      <GlobalStyle />
      <AppBar>
        <Toolbar>
          <ToolbarLink to="/">
            <Typography variant="h6">Application</Typography>
          </ToolbarLink>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/color" exact component={ColorPage} />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  </Router>
)

type ProgressProps = ComponentProps<typeof CircularProgress>
const Loading = styled((p: ProgressProps) => <CircularProgress {...p} />)`
  margin: 0 auto;
  align-self: center;
`

const ToolbarLink = styled(Link)`
  text-decoration: none;
`

const HomePage = React.lazy(async() => {
  const module = await import('../home-page')
  return {default: module.AppHomePage}
})

const NotFoundPage = React.lazy(async() => {
  const module = await import('../not-found-page')
  return {default: module.AppNotFoundPage}
})

const ColorPage = React.lazy(async() => {
  const module = await import('../../../color/components/page')
  return {default: module.ColorPage}
})
