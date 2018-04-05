import * as React from 'react'
import {hot} from 'react-hot-loader'
import styled from 'styled-components'

// Container component
const Container = styled.div`
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

/** Render root component representing the entire application */
export const AppRoot = hot(module)(() => <Container>Hello, World</Container>)
