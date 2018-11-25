import {CssBaseline, colors} from '@material-ui/core'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {ColorPage} from '.'
import * as Color from '../../context'
import * as Template from './template'

// Default props for template module
const props = {
  autoColor: false,
  nextColor: action('nextColor'),
  previousColor: action('previousColor'),
  selectedColor: 'white',
}

// Styled component for storybook
const StyledComponent = styled(ColorPage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// Styled template for storybook
const StyledTemplate = styled(Template.ColorPage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const RootStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
  }
`

// Define stories
storiesOf('<ColorPage>', module)
  .addDecorator(story => (
    <>
      <CssBaseline />
      <RootStyle />
      <Color.Provider
        colors={[colors.red[300], colors.grey[300], colors.blue[300]]}
      >
        {story()}
      </Color.Provider>
    </>
  ))
  .add('component', () => <StyledComponent />)
  .add('template', () => <StyledTemplate {...props} />)
