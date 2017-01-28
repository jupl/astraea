import * as React from 'react'
import styled from 'styled-components'

// Background component
interface BackgroundProps {
  color: string
  className?: string
  children?: React.ReactNode
}
let Background = ({children, className}: BackgroundProps) => (
  <div className={className}>{children}</div>
)
const StyledBackground = styled(Background)`
  transition: background 0.8s ease-out;
  display: flex;
  background-color: ${({color}) => color};
`

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
  background: linear-gradient(rgba(255, 255, 255, 0.4), transparent);
`

/** Button component */
export const Button = styled.button`
  border-radius: 50%;
  background: radial-gradient(white, gainsboro);
  border-color: gainsboro;
  outline: none;
`

/** Properties for color page component */
export interface Props {
  /** CSS color to show */
  readonly color: string

  /** Additional class names to include */
  readonly className?: string
}

/** Actions for color page component */
export interface Actions {
  /** Handler when user wants to go to next color */
  onNextColor(): void

  /** Handler when user wants to go to previous color */
  onPreviousColor(): void
}

/**
 * Render color page component showing current color and buttons to change
 * @param props Component properties
 * @return Color page component
 */
export default function ColorPage({
  className,
  color,
  onNextColor,
  onPreviousColor,
}: Props & Actions) {
  return (
    <StyledBackground color={color} className={className}>
      <Gradient>
        <Button onClick={onPreviousColor}>&lt;</Button>
        <Text>Hello, World</Text>
        <Button onClick={onNextColor}>&gt;</Button>
      </Gradient>
    </StyledBackground>
  )
}
