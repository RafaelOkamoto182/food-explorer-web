import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.6rem;

@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      flex-direction: row;
      justify-content: center;
    }
`;

export const StepperContainer = styled.div`
display: flex;
align-items: center;


>div{
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    width: 40px;
    text-align: center;
}
`

export const QuantityButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border: none;

  cursor: pointer;
  font-size: 25px;

  height:3.2rem;
`;

export const QuantityDisplay = styled.div`
  margin: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300}
`;