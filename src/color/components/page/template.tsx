import * as React from 'react'
import styled from 'styled-components'

// Background component
interface BackgroundProps extends React.HTMLProps<HTMLDivElement> {
  color: string
}
const StyledBackground = styled(Background)`
  transition: background 0.8s ease-out;
  display: flex;
  background-color: ${({color}) => color};
`
function Background({color: _, ...props}: BackgroundProps) {
  return <div {...props} />
}

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

/** Data for color page component */
export interface Props {
  className?: string
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
  className,
  nextColor,
  previousColor,
  selectedColor,
}: Props) {
  return (
    <StyledBackground color={selectedColor} className={className}>
      <Gradient>
        <Button onClick={previousColor}>&lt;</Button>
        <Text>Hello, World</Text>
        <Button onClick={nextColor}>&gt;</Button>
      </Gradient>
    </StyledBackground>
  )
}
