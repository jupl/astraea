import * as React from 'react'
import {action, storiesOf} from '@kadira/storybook'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import styled from 'styled-components'
import color from '../../reducer'
import createStore from '../../../common/create-store'
import Component from '.'
import Template from './template'

// Create small store instance
const store = createStore({
  name: 'Color.Page',
  reducer: combineReducers({color}),
})

// Default props for template module
const props = {
  color: 'white',
  onPreviousColor: action('previousColor'),
  onNextColor: action('nextColor'),
}

// Styled component for storybook
const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// Styled template for storybook
const StyledTemplate = styled(Template)`
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
