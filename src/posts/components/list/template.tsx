import * as React from 'react'
import Link from 'redux-first-router-link'
import * as Posts from '../../graphql'
import {navigation} from '../../routes'
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
    : posts.map(post => (
      <Link key={post.id} to={navigation.post(post)}>
        <PostsListItem post={post} />
      </Link>
    ))
  return <div>{contents}</div>
}
