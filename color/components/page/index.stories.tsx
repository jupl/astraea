import {action, storiesOf} from '@storybook/react'
import * as React from 'react'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import styled from 'styled-components'
import {createStore} from '../../../common/store'
import * as color from '../../reducer'
import * as component from './index'
import * as template from './template'

// Create small store instance
const store = createStore({
  name: 'Color.Page',
  reducer: combineReducers({color: color.reducer}),
})

// Default props for template module
const props = {
  color: 'white',
  onPreviousColor: action('previousColor'),
  onNextColor: action('nextColor'),
}

// Styled component for storybook
const StyledComponent = styled(component.ColorPage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// Styled template for storybook
const StyledTemplate = styled(template.ColorPage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// Define stories
storiesOf('Color.Page', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('component', () => <StyledComponent />)
  .add('template', () => <StyledTemplate {...props} />)
