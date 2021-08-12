import { DefaultTheme } from 'styled-components'

const breakpoints = ['425px', '768px', '1024px']

type Colors = {
  black: string[],
  white: string[],
  gray: string[],
  transparent: 'transparent'
}

declare module 'styled-components' {
  interface DefaultTheme {
    breakpoints: string[],
    mediaQueries: {
      small: string,
      medium: string,
      large: string,
    },
    colors: Colors
    elevation: string[]
    spacing: number[]
    fontSizes: number[]
    borderWidths: number[]
    radii: number[]
  }
}

export const Chess24Theme: DefaultTheme = {
  breakpoints,
  mediaQueries: {
    small: `(max-width: ${breakpoints[0]})`,
    medium: `(max-width: ${breakpoints[1]})`,
    large: `(max-width: ${breakpoints[2]})`,
  },
  colors: {
    black: ['#000e1a'],
    white: ['#fffffe'],
    gray: ['#dcdcdc'],
    transparent: 'transparent'
  },
  elevation: [
    'none',
    '0 2px 2px 0 rgba(0,0,0,0.6), 0 3px 1px -2px rgba(0,0,0,0.3), 0 1px 5px 0 rgba(0,0,0,0.3);',
  ],
  spacing: [0, 4, 8, 12, 16, 24, 32, 40, 44],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 36],
  borderWidths: [0, 1, 2, 4],
  radii: [2, 4, 5, 10, 20, 30],
}
