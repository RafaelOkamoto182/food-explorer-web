import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  
  border-radius: .6rem;
  
  > input {
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    font-size: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  
  > svg {
    margin-left: 1rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;