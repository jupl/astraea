import {AppBar, Toolbar, Typography} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {Container} from '~/common/components/container'
import {theme} from '~/common/theme'

/**
 * Render root component representing the entire application
 * @return Root component
 */
export const AppRoot = () => (
  <Container theme={theme}>
    <Root>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography>
        Hello, World
      </Typography>
    </Root>
  </Container>
)

// Container component
const SPACING = 16
const Root = styled.div`
  padding: ${SPACING + 48}px ${SPACING}px ${SPACING}px;
`
