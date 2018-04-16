import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Author} from '../../../authors/graphql'
import {Comment} from '../../graphql'
import * as Template from './template'

interface Props {
  id?: Comment['id']
}

interface CommentResponse extends Pick<Comment, 'text'> {
  author: Pick<Author, 'id' | 'name'>
  comments: Pick<Comment, 'id'>[]
}

/** Apollo response */
export interface Data {
  comment: CommentResponse
}

/** Wrap comments item component with data from store */
export const CommentsItem = graphql<Props>(gql`
  query($id: Int!) {
    comment(id: $id) {
      text
      author {
        id
        name
      }
      comments {
        id
      }
    }
  }
`, {
  skip: ({id}: Props) => id === undefined,
  options: ({id}) => ({variables: {id}}),
})(Template.CommentsItem)
