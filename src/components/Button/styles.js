import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border: 0;
  height: 3.2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 500;
  line-height:2.4rem;
  border-radius: .5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > span {
    font-size: 1.4rem;
  }

  > svg {
    font-size: 1.4rem;
  }
`;