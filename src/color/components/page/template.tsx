import * as React from 'react'
import {
  BACKGROUND_STYLE,
  BUTTON_STYLE,
  GRADIENT_STYLE,
  TEXT_STYLE,
} from './styles'

/** Properties for color page component */
export interface Props {
  /** CSS color to show */
  color: string

  /** Additional CSS styles to override */
  style?: React.CSSProperties
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
        <span style={TEXT_STYLE}>Welcome</span>
        <button style={BUTTON_STYLE} onClick={onNextColor}>&gt;</button>
      </div>
    </div>
  )
}
