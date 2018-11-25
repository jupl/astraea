import {Grid} from '@material-ui/core'
import React from 'react'

/**
 * Render fallback if not on any route
 * @return 404 page
 */
export const AppNotFoundPage = () => (
  <Grid container>
    <Grid item xs={12}>
      Page not found
    </Grid>
  </Grid>
)
