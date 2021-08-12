import { useState } from 'react';
import { StyledButton } from '../Button/styles';
import { StyledPaginationContainer } from './styles';
import { Props } from './types';

const Pagination: React.FC<Props> = (props: Props) => {
  const { onPageChange, dataCount, currentPage } = props
  const [cardPerPage, setCardPerPage] = useState(3);
  const numberOfPages = Math.ceil(dataCount / cardPerPage);
  const pageNumbers = []

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPaginationContainer>
      <StyledButton onClick={() => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1)
        }
      }}
      >
        Prev
      </StyledButton>
      {pageNumbers}
      <StyledButton onClick={() => {
        if (currentPage < numberOfPages) {
          onPageChange(currentPage + 1)
        }
      }}
      >
        Next
      </StyledButton>
    </StyledPaginationContainer>
  )
}

export default Pagination
