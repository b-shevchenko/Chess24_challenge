import styled from 'styled-components'
import { Props } from './types'

export const StyledButton = styled.button<Props>`
  background-color: ${(props) => props.disabled ? props.theme.colors.white[0] : props.theme.colors.black[0]};
  border-radius:${({ theme }) => `${theme.radii[4]}px`};
  border:${({ theme }) => `${theme.borderWidths[3]}px solid ${theme.colors.gray[0]}`};
  display:inline-block;
  cursor:pointer;
  color: ${(props) => props.disabled ? props.theme.colors.black[0] : props.theme.colors.white[0]};
  font-size: ${({ theme }) => `${theme.fontSizes[4]}px`};
  font-weight:bold;
  padding: ${({ theme }) => `${theme.spacing[2]}px ${theme.spacing[5]}px`};
`