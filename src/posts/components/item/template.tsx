import * as React from 'react'
import {DataProps} from 'react-apollo'
import {Data} from '.'
import {CommentsItem} from '../../../comments/components/item'

/** Post item properties */
export type Props = DataProps<Data>

/**
 * Render post item detail
 * @return Post item component
 */
export function PostsItem({data: {loading, post}}: Props) {
  // Check that data is ready and available
  if(loading) {
    return <>Loading</>
  }
  if(post === undefined) {
    return <>Error</>
  }

  // Construct comments
  const comments = post.comments.length > 0
    ? post.comments.map(c => <CommentsItem key={c.id} {...c} />)
    : <div>No comments</div>

  return (
    <>
      <div>{post.title}</div>
      <div>{post.description}</div>
      {comments}
    </>
  )
}
