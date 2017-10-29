import * as React from 'react'

/** Template properties */
export interface Props {
  component: React.ComponentClass
}

/**
 * Render root component representing the entire application
 * @return Root component
 */
export function AppRoot({component: Component}: Props) {
  return <Component />
}
