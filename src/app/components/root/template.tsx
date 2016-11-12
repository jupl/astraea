import * as React from 'react'
import ColorPage from '../../../color/components/page'

/** Styling for root page */
const PAGE_STYLE: React.CSSProperties = {
  flex: 1,
}

/**
 * Render root component representing the entire application
 * @return Root component
 */
export default function Root() {
  return <ColorPage style={PAGE_STYLE} />
}
