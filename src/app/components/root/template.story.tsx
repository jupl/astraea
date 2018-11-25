import {CssBaseline} from '@material-ui/core'
import {storiesOf} from '@storybook/react'
import React from 'react'
import {AppRoot} from './template'

storiesOf('<AppRoot>', module)
  .addDecorator(story => (
    <>
      <CssBaseline />
      {story()}
    </>
  ))
  .add('template', () => <AppRoot />)
