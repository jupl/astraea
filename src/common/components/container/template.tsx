import React, {ReactNode} from 'react'

/** Component properties */
export interface Props {
  children: ReactNode
}

/**
 * Render container component
 * @return Decorated component
 */
export const Container = ({children}: Props) => <>{children}</>
