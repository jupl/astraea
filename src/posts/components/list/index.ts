import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import * as Template from './template'

/** Wrap posts list component with data from store */
export const PostsList = graphql(gql`
  query {
    posts {
      id
      title
    }
  }
`)(Template.PostsList)
