import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => `${theme.spacing[5]}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing[5]}px`};

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing[3]}px`};
    overflow: auto;
    top: 80px;
    left: 0;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white[0]};
  }
`