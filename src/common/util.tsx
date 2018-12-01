import React, {ComponentType, Context} from 'react'

/** Omit properties */
export type Omit<T, K> = Pick<T, Exclude<keyof T, keyof K>>

/**
 * Wrap component to inject context data
 * @param Ctx React context
 * @return Component wrapper
 */
export function withContext<C>(Ctx: Context<C>) {
  return function context<P>(Component: ComponentType<C & Omit<P, C>>) {
    return (props: Omit<P, C>) => (
      <Ctx.Consumer>
        {ctx => <Component {...ctx} {...props} />}
      </Ctx.Consumer>
    )
  }
}
