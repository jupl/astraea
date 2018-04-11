import * as React from 'react'
import {DataProps} from 'react-apollo'
import {Post} from '../../graphql'

interface Data {
  post: Pick<Post, 'title'>
}

/** Post item properties */
export type Props = DataProps<Data>

/**
 * Render post item detail
 * @return Post item component
 */
export function PostsItem({data: {loading, post}}: Props) {
  if(loading) {
    return <div>Loading</div>
  }
  if(post === undefined) {
    return <div>Error</div>
  }
  return <div>{post.title}</div>
}
