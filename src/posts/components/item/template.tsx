import * as React from 'react'
import {DataProps} from 'react-apollo'
import {Data} from '.'

/** Post item properties */
export type Props = DataProps<Data>

/**
 * Render post item detail
 * @return Post item component
 */
export function PostsItem({data: {loading, post}}: Props) {
  if(loading) {
    return <>Loading</>
  }
  if(post === undefined) {
    return <>Error</>
  }
  return (
    <>
      <div>{post.title}</div>
      <div>{post.description}</div>
    </>
  )
}
