import { DefaultTheme } from 'styled-components'

const breakpoints = ['425px', '768px', '1024px']

type Colors = {
  black: string[],
  white: string[],
  transparent: 'transparent'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[],
    mediaQueries: {
      small: string,
      medium: string,
      large: string,
    },
    colors: Colors,
    elevation: string[],
    spacing: number[],
    fontSizes: number[],
    borderWidths: number[],
    radii: number[],
  }
}
