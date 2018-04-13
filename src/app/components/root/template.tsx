import * as React from 'react'
import Link from 'redux-first-router-link'
import {navigation} from '../../routes'

/** Template properties */
export interface Props {
  component: React.ComponentClass | React.StatelessComponent
}

/**
 * Render root component representing the entire application
 * @return Root component
 */
export function AppRoot({component: Component}: Props) {
  return (
    <>
      <div>
        <Link to={navigation.home()}>Home</Link>
        |
        <Link to={navigation.addPost()}>Add Post</Link>
      </div>
      <Component />
    </>
  )
}
