import * as React from 'react'
import {action, storiesOf} from '@kadira/storybook'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import color from '../../reducer'
import createStore from '../../../lib/create-store'
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
  style: {flex: 1},
  onPreviousColor: action('previousColor'),
  onNextColor: action('nextColor'),
}

// Define stories
storiesOf('Color.Page', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('component', () => <Component style={{flex: 1}} />)
  .add('template', () => <Template {...props} />)
