import * as React from 'react'
import styled from 'styled-components'
import {ColorPage} from '../../../color/components/page'

// Container component
const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  display: flex;
  background-color: white;
`

// Styled color page component
const StyledColorPage = styled(ColorPage)`
  flex: 1;
`

/**
 * Render root component representing the entire application
 * @return Root component
 */
export function Root() {
  return (
    <Container>
      <StyledColorPage />
    </Container>
  )
}
