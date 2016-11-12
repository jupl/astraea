import * as React from 'react'

/** Styling for container background */
const BACKGROUND_STYLE: React.CSSProperties = {
  transition: 'background 0.8s ease-out',
  display: 'flex',
}

/** Styling for buttons */
const BUTTON_STYLE: React.CSSProperties = {
  borderRadius: '50%',
  background: 'radial-gradient(white, gainsboro)',
  borderColor: 'gainsboro',
  outline: 'none',
}

/** Styling for text */
const TEXT_STYLE: React.CSSProperties = {
  marginLeft: 4,
  marginRight: 4,
}

/** Styling for gradient overlay */
const GRADIENT_STYLE: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(rgba(255, 255, 255, 0.4), transparent)',
}

/** Properties for color page component */
export interface Props {
  /** CSS color to show */
  readonly color: string

  /** Additional CSS styles to override */
  readonly style?: React.CSSProperties
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
  color: backgroundColor,
  onNextColor,
  onPreviousColor,
  style: extra,
}: Props & Actions) {
  const style = Object.assign({}, BACKGROUND_STYLE, extra, {backgroundColor})
  return (
    <div style={style}>
      <div style={GRADIENT_STYLE}>
        <button style={BUTTON_STYLE} onClick={onPreviousColor}>&lt;</button>
        <span style={TEXT_STYLE}>Hello, World</span>
        <button style={BUTTON_STYLE} onClick={onNextColor}>&gt;</button>
      </div>
    </div>
  )
}
