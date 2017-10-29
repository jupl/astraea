import * as React from 'react'
import {Post} from '../../graphql'

/** Post item properties */
export interface Props {
  loading: boolean
  post?: Post
}

/**
 * Render post item detail
 * @return Post item component
 */
export function PostsItem({loading, post}: Props) {
  if(loading) {
    return <div>Loading</div>
  }
  if(post === undefined) {
    return <div>Error</div>
  }
  return <div>{post.title}</div>
}
