import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {OptionProps} from 'react-apollo/types'
import * as Posts from '../../graphql'
import * as Template from './template'

interface Result {
  posts: Posts.Post[]
}

/** Wrap posts list component with data from store */
export const PostsList = graphql<Result, {}, Template.Props>(gql`
  query {
    posts {
      id
      title
    }
  }
`, {props})(Template.PostsList)

/**
 * Inject props from Apollo to component
 * @return Properties for component
 */
export function props({data}: OptionProps<{}, Result>): Template.Props {
  return {
    loading: data!.loading,
    posts: data!.posts,
  }
}
