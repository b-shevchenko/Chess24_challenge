import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black[0]};
  border-radius:${({ theme }) => `${theme.radii[4]}px`};
  border:${({ theme }) => `${theme.borderWidths[3]}px solid ${theme.colors.gray[0]}`};
  display:inline-block;
  cursor:pointer;
  color: ${({ theme }) => theme.colors.white[0]};
  font-size: ${({ theme }) => `${theme.fontSizes[4]}px`};
  font-weight:bold;
  padding: ${({ theme }) => `${theme.spacing[2]}px ${theme.spacing[5]}px`};
`