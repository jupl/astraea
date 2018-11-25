import {IconButton} from '@material-ui/core'
import {NavigateBefore, NavigateNext} from '@material-ui/icons'
import * as React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from './global'

// Text component
const Text = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`

// Gradient overlay component
const Gradient = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

/** Data for color page component */
export interface Props {
  className?: string
  autoColor: boolean
  selectedColor: string
  nextColor(): void
  previousColor(): void
}

/**
 * Render color page component showing current color and buttons to change
 * @param props Component properties
 * @return Color page component
 */
export function ColorPage({
  autoColor,
  nextColor,
  previousColor,
  selectedColor,
}: Props) {
  return (
    <>
      <GlobalStyle color={selectedColor} />
      <Gradient>
        <IconButton color="primary" onClick={previousColor}>
          <NavigateBefore />
        </IconButton>
        <Text>Auto color cycling is {autoColor ? 'on' : 'off'}</Text>
        <IconButton color="primary" onClick={nextColor}>
          <NavigateNext />
        </IconButton>
      </Gradient>
    </>
  )
}
