import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  height:11.1rem;

  padding: 5.6rem 2.8rem 2.4rem
`;

export const HeaderContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

>img{
  width: 16rem;
}

`

export const Menu = styled.button`
  background: none;
  border: none;

  >svg{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }
`;

export const Orders = styled.button`
  background: none;
  border: none;

  >svg{
    font-size:2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

`
