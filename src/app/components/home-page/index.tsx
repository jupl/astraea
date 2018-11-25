import {Grid, Typography} from '@material-ui/core'
import React, {ComponentProps} from 'react'
import styled from 'styled-components'

/**
 * Render home page
 * @return Home page
 */
export const AppHomePage = () => (
  <Container spacing={16}>
    <Grid item xs={12}>
      <Typography variant="h2" align="center" gutterBottom>
        Astraea Demo
      </Typography>
      <Typography variant="h6" align="center">
        Select one of the options above to try out
      </Typography>
    </Grid>
  </Container>
)

type GridProps = ComponentProps<typeof Grid>
const Container = styled((p: GridProps) => <Grid {...p} container />)`
  flex: 1;
  padding: ${({spacing = 0}) => spacing / 2}px;
  && { margin: 0 }
`
