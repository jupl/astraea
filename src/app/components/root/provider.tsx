import React, {ComponentType} from 'react'
import * as Color from '../../../color/context'
import {Omit} from '../../../common/util'

/** Injected properties */
export type Props = Color.Props

/**
 * Wrap component to insert providers
 * @param Component React context
 * @return Wrapped function
 */
export function wrap<P>(Component: ComponentType<Omit<P, Props>>) {
  return ({colors, ...props}: P & Props) => (
    <Color.Provider colors={colors}>
      <Component {...props} />
    </Color.Provider>
  )
}
