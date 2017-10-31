import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Post} from '../../graphql'
import * as Template from './template'

interface Result {
  posts?: Pick<Post, 'id' | 'title'>[]
}

/** Wrap posts list component with data from store */
export const PostsList = graphql<Result, {}, Template.Props>(gql`
  query {
    posts {
      id
      title
    }
  }
`, {
  props: ({data}) => data,
})(Template.PostsList)
