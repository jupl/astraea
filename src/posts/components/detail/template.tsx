import * as React from 'react'
import {Post} from '../../graphql'

/** Interfaces for PostsList component properties */
export namespace PostsDetail {
  /** Component data */
  export interface Data {
    post: Post
  }
  /** Component properties */
  export type Props = Data
}

/** Render list of posts */
export function PostsDetail({post}: PostsDetail.Props) {
  return <div>{post.title}</div>
}
