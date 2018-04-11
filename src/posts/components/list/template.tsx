import * as React from 'react'
import {DataProps} from 'react-apollo'
import Link from 'redux-first-router-link'
import {Post} from '../../graphql'
import {navigation} from '../../routes'
import {PostsListItem} from '../list-item'

interface Data {
  posts: Pick<Post, 'id' | 'title'>[]
}

/** Component properties */
export type Props = DataProps<Data>

/**
 * Render posts list
 * @param props Component properties
 * @return Posts list
 */
export function PostsList({data: {loading, posts}}: Props) {
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
