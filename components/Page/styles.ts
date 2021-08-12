import styled from 'styled-components'
import { Props } from './types'

export const StyledPage = styled.div<Props>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledHeader = styled.div`
  top: 0;
  width: 100%;
  position: sticky;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  svg {
    width: 100px;
  }
  h1 {
    padding-left: 10px;
  }
`

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid black;
`

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledContent = styled.div`
  width: 500px;
`