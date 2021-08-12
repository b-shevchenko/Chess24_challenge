import styled from 'styled-components'

export const StyledCard = styled.div`
  box-shadow: ${({ theme }) => theme.elevation[1]};
  margin-top: ${({ theme }) => `${theme.spacing[5]}px`};
  margin-bottom: ${({ theme }) => `${theme.spacing[5]}px`};
  padding: ${({ theme }) => `${theme.spacing[5]}px`};
  cursor: pointer;
  text-align: center;
`
export const StyledCardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`