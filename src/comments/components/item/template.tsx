import * as React from 'react'
import {DataProps} from 'react-apollo'
import {CommentsItem as Self, Data} from '.'

/** Post item properties */
export interface Props extends DataProps<Data> {
  expand?: boolean
}

interface State {
  expand: boolean
}

/** Comment item detail component */
export class CommentsItem extends React.Component<Props, State> {
  /**
   * Construct state from expanded
   * @param props New props
   * @param state Current state
   * @return New state
   */
  static getDerivedStateFromProps({expand}: Props, state: State | null) {
    if(state === null) {
      return {expand: expand !== undefined ? expand : false}
    }
    else if(expand !== undefined) {
      return {...state, expand}
    }
    else {
      return state
    }
  }

  /** Toggle expand */
  toggleExpand = () => this.setState(({expand}) => ({
    expand: !expand,
  }))

  /**
   * Render component
   * @return Component
   */
  render() {
    // Check that data is ready and available
    const {data: {loading, comment}} = this.props
    if(loading) {
      return <>Loading</>
    }
    if(comment === undefined) {
      return <>Error</>
    }

    // Render comments if expanded
    let comments
    if(this.state.expand) {
      comments = comment.comments.map(c => <Self key={c.id} {...c} />)
    }

    // Add toggle button if there are child comments
    let toggleButton
    if(comment.comments.length > 0) {
      toggleButton = (
        <button onClick={this.toggleExpand}>
          {this.state.expand ? 'Collapse' : 'Expand'}
        </button>
      )
    }

    return (
      <>
        <div>{comment.author.name}</div>
        <div>{comment.text}</div>
        {toggleButton}
        {comments}
      </>
    )
  }
}
