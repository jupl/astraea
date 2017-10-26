import {ApolloClient} from 'apollo-client'
import * as React from 'react'
import {ApolloProvider} from 'react-apollo'
import {AppContainer} from 'react-hot-loader'
import {Provider, ProviderProps} from 'react-redux'

interface Props extends ProviderProps {
  client: ApolloClient<any> // tslint:disable-line:no-any
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export function Container({client, ...props}: Props) {
  return (
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider {...props} />
      </ApolloProvider>
    </AppContainer>
  )
}
