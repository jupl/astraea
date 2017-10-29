import * as React from 'react'
import * as Posts from '../../graphql'

/** Component properties */
export interface Props {
  post: Posts.Post
}

/**
 * Render post list item
 * @return List item
 */
export function PostsListItem({post}: Props) {
  return <div>{post.title}</div>
}
