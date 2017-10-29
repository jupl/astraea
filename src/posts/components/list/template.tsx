import * as React from 'react'
import * as Posts from '../../graphql'
import {PostsListItem} from '../list-item'

/** Component properties */
export interface Props {
  posts: Posts.Post[]
  loading: boolean
}

/**
 * Render posts list
 * @param props Component properties
 * @return Posts list
 */
export function PostsList({loading, posts}: Props) {
  const contents = loading
    ? 'Loading'
    : posts.map(post => <PostsListItem key={post.id} post={post} />)
  return <div>{contents}</div>
}
