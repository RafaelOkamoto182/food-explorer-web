import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.BLUE_600};
  
  border: 0;
  height: 5.6rem;
  padding: 0 1rem;
  font-weight: 500;
  border-radius: .44rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    font-size: 2.2rem;
  }

  > svg {
    font-size: 2.2rem;
  }
`;