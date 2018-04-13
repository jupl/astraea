import * as React from 'react'
import {DataProps} from 'react-apollo'
import Link from 'redux-first-router-link'
import {Data} from '.'
import {navigation} from '../../routes'
import {PostsListItem} from '../list-item'

/** Component properties */
export type Props = DataProps<Data>

/**
 * Render posts list
 * @param props Component properties
 * @return Posts list
 */
export function PostsList({data: {loading, posts}}: Props) {
  if(loading) {
    return <>Loading</>
  }
  if(posts === undefined) {
    return <>Error</>
  }
  return <>{posts.map(createPost)}</>
}

function createPost(post: Post) {
  return (
    <div>
      <Link key={post.id} to={navigation.post(post)}>
        <PostsListItem post={post} />
      </Link>
    </div>
  )
}
