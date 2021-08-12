import { useState } from 'react';
import { StyledButton } from '../Button/styles';
import { StyledPaginationContainer } from './styles';
import { Props } from './types';

const Pagination: React.FC<Props> = (props: Props) => {
  const { onPageChange, numberOfPages, currentPage } = props
  const [cardPerPage, setCardPerPage] = useState(3);

  return (
    <StyledPaginationContainer>
      <StyledButton onClick={() => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1, false)
        }
      }}
      >
        Prev
      </StyledButton>
      {currentPage}/{numberOfPages}
      <StyledButton onClick={() => {
        const nextPage = currentPage + 1;
        const shouldGetNewData = currentPage === numberOfPages - 1 ? true : false
        onPageChange(nextPage, shouldGetNewData);
      }}
      >
        Next
      </StyledButton>
    </StyledPaginationContainer>
  )
}

export default Pagination
