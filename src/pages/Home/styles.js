import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

`;

export const CardContainer = styled.div`
  width: 30rem;
  height: 46rem;

`