import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Post} from '../../graphql'
import * as Template from './template'

/** Apollo response */
export interface Data {
  posts: Pick<Post, 'id' | 'title'>[]
}

/** Wrap posts list component with data from store */
export const PostsList = graphql(gql`
  query {
    posts {
      id
      title
    }
  }
`)(Template.PostsList)
