import * as React from 'react'
import {DataProps} from 'react-apollo'
import * as Wrapper from '.'

/** Post item properties */
export type Props = DataProps<Wrapper.Data>

/**
 * Render comment item detail
 * @return Comment item component
 */
export function CommentsItem({data: {loading, comment}}: Props) {
  if(loading) {
    return <>Loading</>
  }
  if(comment === undefined) {
    return <>Error</>
  }
  const comments = comment.comments.map(c => (
    <div key={c.id}><Wrapper.CommentsItem {...c} /></div>
  ))
  return (
    <>
      <div>{comment.author.name}</div>
      <div>{comment.text}</div>
      {comments}
    </>
  )
}
