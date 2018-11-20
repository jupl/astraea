import React, {ComponentType} from 'react'
import * as Color from '../../../color/context'

/** Injected properties */
export interface Props {
  colors: [string, ...string[]],
}

/**
 * Wrap component to insert providers
 * @param Component React context
 * @return Wrapped function
 */
export const wrap = <P extends {}>(Component: ComponentType<P>) =>
  // @ts-ignore until Microsoft/TypeScript/pull/28234
  ({colors, ...props}: P & Props) => (
    <Color.Provider colors={colors}>
      <Component {...props} />
    </Color.Provider>
  )
