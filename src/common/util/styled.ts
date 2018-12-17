import {ComponentType, FunctionComponent} from 'react'
import style from 'styled-components'

/**
 * Fixer for styled-components with Material UI
 * @param Component Component to add style to
 * @return Styler
 */
export function component<P>(Component: ComponentType<P>) {
  return style(Component as FunctionComponent<P>)
}

/** Copied from styled-component */
export const div = style.div
