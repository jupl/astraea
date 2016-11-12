import * as React from 'react'

/** Styling for root page */
const PAGE_STYLE: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(transparent, gainsboro)',
}

/**
 * Render root component representing the entire application
 * @return Root component
 */
export default function Root() {
  return <div style={PAGE_STYLE}>Hello, World</div>
}
