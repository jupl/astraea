import React from 'react'
import styled from 'styled-components'
import {Container} from '../../../common/components/container'

/**
 * Render root component representing the entire application
 * @return Root component
 */
export const AppRoot = () => (
  <Container>
    <Root>
      Hello, World
    </Root>
  </Container>
)

// Container component
const Root = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, gainsboro);
`
