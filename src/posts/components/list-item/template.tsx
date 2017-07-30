import * as React from 'react'
import {Post} from '../../graphql'

/** Interfaces for PostsListItem component properties */
export namespace PostsListItem {
  /** Component data */
  export interface Data {
    post: Post
  }
  /** Component actions */
  export interface Actions {
    onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>
  }
  /** Component properties */
  export type Props = Actions & Data
}

/** Render posts list item */
export function PostsListItem({post, ...props}: PostsListItem.Props) {
  return <div {...props}>{post.title}</div>
}
