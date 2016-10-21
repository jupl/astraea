import {CSSProperties} from 'react'

/** Styling for container background */
export const BACKGROUND_STYLE: CSSProperties = {
  transition: 'background 0.8s ease-out',
  display: 'flex',
}

/** Styling for buttons */
export const BUTTON_STYLE: CSSProperties = {
  borderRadius: '50%',
  background: 'radial-gradient(white, gainsboro)',
  borderColor: 'gainsboro',
  outline: 'none',
}

/** Styling for text */
export const TEXT_STYLE: CSSProperties = {
  marginLeft: 4,
  marginRight: 4,
}

/** Styling for gradient overlay */
export const GRADIENT_STYLE: CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(rgba(255, 255, 255, 0.4), transparent)',
}
