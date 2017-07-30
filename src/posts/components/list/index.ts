import {gql, graphql} from 'react-apollo'
import {Post} from '../../graphql'
import {PostsList as Template} from './template'

interface Result {
  posts: Post[]
}

export const PostsList = graphql<Result, {}, Template.Data>(gql`
  query {
    posts {
      id
      title
    }
  }
`, {
  props: ({data}): Template.Data => ({
    posts: data!.loading ? [] : data!.posts,
  }),
})(Template)
