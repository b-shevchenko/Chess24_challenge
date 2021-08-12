import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => `${theme.spacing[5]}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing[5]}px`};
`