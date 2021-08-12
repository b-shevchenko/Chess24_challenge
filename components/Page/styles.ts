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
  background-color: ${({ theme }) => theme.colors.black[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white[0]};

  h1 {
    padding-left: ${({ theme }) => `${theme.spacing[2]}px`};
  }
`

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border:${({ theme }) => `${theme.borderWidths[1]}px solid ${theme.colors.black[0]}`};
`

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 75%;
  }
`

export const StyledContent = styled.div`
  width: 500px;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing[3]}px`};
    overflow: auto;
  }

`