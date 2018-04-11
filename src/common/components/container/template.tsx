import {ApolloClient} from 'apollo-client'
import * as React from 'react'
import {ApolloProvider} from 'react-apollo'
import {hot} from 'react-hot-loader'
import {Provider, ProviderProps} from 'react-redux'

interface Props extends ProviderProps {
  client: ApolloClient<{}>
}

/** Render container component adding possible dev tools and redux store */
export const Container = hot(module)(({client, ...props}: Props) => (
  <ApolloProvider client={client}>
    <Provider {...props} />
  </ApolloProvider>
))
