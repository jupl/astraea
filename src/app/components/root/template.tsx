import * as React from 'react'
import ColorPage from '../../../color/components/page'
import {PAGE_STYLE} from './styles'

/**
 * Render root component representing the entire application
 * @return Root component
 */
export default function Root() {
  return <ColorPage style={PAGE_STYLE} />
}
