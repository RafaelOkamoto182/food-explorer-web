import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-columns: 280px auto; 
  grid-template-rows: auto 1fr; 
  grid-template-areas: 
    "menu top"
    "menu content";

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
      grid-template-columns: auto;
      grid-template-rows: auto 1fr;
      //o que significa: a primeira row vai ocupar o quanto ele precisa (auto)
      //e a segunda vai ocupar o resto, 1 fração (1fr)
      
      grid-template-areas:
      "top"
      "content";
    }
`;

export const FixedContent = styled.section`
  grid-area: top;
`;