import {gql, graphql} from 'react-apollo'
import {Post} from '../../graphql'
import {NO_POST, PostsDetail as Template} from './template'

interface Result {
  post: Post
}

interface Props {
  id?: Post['id']
}

export const PostsDetail = graphql<Result, Props, Template.Props>(gql`
  mutation {
    post(id: $id) {
      id
      title
    }
  }
`, {
  options: ({id}) => ({
    variables: {id},
  }),
  props: ({data}) => ({
    post: data!.loading ? NO_POST : data!.post,
  }),
  skip: ({id}: Props) => id === undefined,
})(Template)
