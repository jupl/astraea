import {gql, graphql} from 'react-apollo'
import {Post} from '../../graphql'
import {PostsDetail as Template} from './template'

export const NO_POST: Post = {
  id: 0,
  title: '',
  description: '',
  author: undefined!,
  comments: [],
}

interface Result {
  post: Post
}

interface Props {
  id?: Post['id']
}

export const PostsDetail = graphql<Result, Props, Template.Props>(gql`
  query {
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
