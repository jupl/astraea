import * as React from 'react'
import Link from 'redux-first-router-link'
import {Post} from '../../graphql'
import {navigation} from '../../routes'
import {PostsListItem} from '../list-item'

/** Component properties */
export interface Props {
  loading: boolean
  posts?: Post[]
}

/**
 * Render posts list
 * @param props Component properties
 * @return Posts list
 */
export function PostsList({loading, posts}: Props) {
  if(loading) {
    return <div>Loading</div>
  }
  if(posts === undefined) {
    return <div>Error</div>
  }
  return <div>{posts.map(createPost)}</div>
}

function createPost(post: Post) {
  return (
    <Link key={post.id} to={navigation.post(post)}>
      <PostsListItem post={post} />
    </Link>
  )
}
