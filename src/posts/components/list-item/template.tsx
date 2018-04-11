import * as React from 'react'
import * as Posts from '../../graphql'

/** Component properties */
export interface Props {
  post: Pick<Posts.Post, 'title'>
}

/**
 * Render post list item
 * @return List item
 */
export function PostsListItem({post}: Props) {
  return <div>{post.title}</div>
}
