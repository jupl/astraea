import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {connect} from 'react-redux'
import {Comment} from '../../../comments/graphql'
import * as Common from '../../../common/reducer'
import {Post} from '../../graphql'
import {navigation} from '../../routes'
import * as Template from './template'

interface Props {
  id?: Post['id']
}

interface PostResponse extends Pick<Post, 'description' | 'title'> {
  comments: Pick<Comment, 'id'>[]
}

/** Apollo response */
export interface Data {
  post: PostResponse
}

const reduxDecorator = connect(reduxProps)
const gqlDecorator = graphql<Props>(gql`
  query($id: Int!) {
    post(id: $id) {
      title
      description
      comments {
        id
      }
    }
  }
`, {
  skip: ({id}: Props) => id === undefined,
  options: ({id}) => ({variables: {id}}),
})

/** Wrap posts list component with data from store */
export const PostsItem = reduxDecorator(gqlDecorator(Template.PostsItem))

/**
 * Inject props from Redux to component
 * @return Properties for component
 */
export function reduxProps({location}: Common.State): Props {
  let id: Props['id']
  if(location.type === `${navigation.post}`) {
    id = location.payload.id
  }
  return {id}
}
