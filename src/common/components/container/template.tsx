import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

/**
 * Render container component
 * @return Decorated component
 */
export const Container = ({children}: Props) => <>{children}</>
