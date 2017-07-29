import * as React from 'react'
import {ApolloProvider} from 'react-apollo'
import {ProviderProps} from 'react-apollo/ApolloProvider'
import {AppContainer} from 'react-hot-loader'

/** Container component properties */
interface Props<P> extends ProviderProps {
  /** Component to render */
  readonly component: React.ComponentClass<P> | (() => React.ReactElement<P>)
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export function Container<P>({component: Component, ...props}: Props<P>) {
  return (
    <AppContainer>
      <ApolloProvider {...props}>
        <Component />
      </ApolloProvider>
    </AppContainer>
  )
}
