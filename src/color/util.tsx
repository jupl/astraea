import React, {ComponentType, Context} from 'react'

/** Omit properties */
export type Omit<T, K> = Pick<T, Exclude<keyof T, keyof K>>

/**
 * Wrap component to inject context data
 * @param Ctx React context
 * @return Component wrapper
 */
export const withContext = <C extends {}>(Ctx: Context<C>) =>
  <P extends {}>(Component: ComponentType<P & C>) => (props: Omit<P, C>) => (
    <Ctx.Consumer>
      {context => <Component {...context} {...props} />}
    </Ctx.Consumer>
  )
