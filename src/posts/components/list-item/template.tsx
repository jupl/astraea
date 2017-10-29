import * as React from 'react'
import * as Posts from '../../graphql'

/** Component properties */
export interface Props {
  post: Posts.Post
}

/** Component actions */
export interface Actions {
  onClick?(): void
}

/**
 * Render post list item
 * @return List item
 */
export function PostsListItem({post, onClick}: Props & Actions) {
  return <div onClick={onClick}>{post.title}</div>
}
